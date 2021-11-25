// Imports the Google Cloud client library
const { Storage } = require('@google-cloud/storage');
const { v4: uuidv4 } = require('uuid');

const serviceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
};

const storage = new Storage({
  projectId: process.env.FIREBASE_PROJECTID,
  credentials:
    process.env.NODE_ENV === 'test' ? serviceAccount : 'serviceAccountKey.json',
});

const bucketName = process.env.FIREBASE_STORAGEBUCKET;

async function config() {
  try {
    // Creates the new bucket
    await storage.bucket(bucketName);
    console.log('Connected to bucket');
  } catch (error) {
    console.error(error);
  }
}
async function deleteFolder(user_id) {
  // Deletes the path of user from the bucket
  await storage.bucket(bucketName).deleteFiles({
    prefix: `Candidates/${user_id}/`,
  });
}

async function getUrlFIle(user_id, fileName) {
  // Download one file in the bucket
  const options = {
    version: 'v4',
    action: 'read',
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
  };
  const [url] = await storage
    .bucket(bucketName)
    .file(`Candidates/${user_id}/${fileName}`)
    .getSignedUrl(options);
  return url;
}

async function uploadFile(file, prefix = '', fileName) {
  return new Promise((resolve, reject) => {
    const blob = storage.bucket(bucketName).file(`${prefix}${fileName}`);
    const blobWriter = blob.createWriteStream({
      resumable: false,
      metadata: {
        contentType: file.mimetype,
        metadata: {
          firebaseStorageDownloadTokens: uuidv4(),
        },
      },
    });

    // If there's an error
    blobWriter.on('error', (err) => {
      console.warn(err);
      reject(err);
    });
    // If all is good and done
    blobWriter.on('finish', () => {
      // Assembling public URL for accessing the file via HTTP
      // const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodeURIComponent(
      //   blob.name
      // )}?alt=media`;

      // Return the file name and its public URL
      resolve(blob.name);
    });
    // When there is no more data to be consumed from the stream the end event gets emitted
    blobWriter.end(file.buffer);
  });
}

async function getUserFiles(user_id, file_name) {
  const options = {
    version: 'v4',
    action: 'read',
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
  };
  const [files] = await storage.bucket(bucketName).getFiles({
    prefix: file_name
      ? `Candidates/${user_id}/${file_name}`
      : `Candidates/${user_id}`,
  });
  const result = [];
  await Promise.all(
    files.map(async (file) => {
      const [url] = await storage
        .bucket(bucketName)
        .file(`${file.name}`)
        .getSignedUrl(options);
      const name = file.name.split('/');
      result.push({ url, name: name[2] });
    })
  );
  return result;
}

async function uploadThesis(file, prefix = '', thesis_name) {
  return new Promise((resolve, reject) => {
    const blob = storage.bucket(bucketName).file(`${prefix}${thesis_name}`);
    const blobWriter = blob.createWriteStream({
      resumable: false,
      metadata: {
        contentType: file.mimetype,
        metadata: {
          firebaseStorageDownloadTokens: uuidv4(),
        },
      },
    });

    // If there's an error
    blobWriter.on('error', (err) => {
      console.warn(err);
      reject(err);
    });
    // If all is good and done
    blobWriter.on('finish', () => {
      // Assembling public URL for accessing the file via HTTP
      // const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodeURIComponent(
      //   blob.name
      // )}?alt=media`;

      // Return the file name and its public URL
      resolve(blob.name);
    });
    // When there is no more data to be consumed from the stream the end event gets emitted
    blobWriter.end(file.buffer);
  });
}

async function getThesis(user_id, file_name) {
  const options = {
    version: 'v4',
    action: 'read',
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
  };
  const [files] = await storage.bucket(bucketName).getFiles({
    prefix: file_name ? `Thesis/${user_id}/${file_name}` : `Thesis/${user_id}`,
  });
  const result = [];
  await Promise.all(
    files.map(async (file) => {
      const [url] = await storage
        .bucket(bucketName)
        .file(`${file.name}`)
        .getSignedUrl(options);
      const name = file.name.split('/');
      result.push({ url, name: name[2] });
    })
  );
  return result;
}

module.exports = {
  config,
  uploadFile,
  deleteFolder,
  getUrlFIle,
  getUserFiles,
  uploadThesis,
  getThesis
};
