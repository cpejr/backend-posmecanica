// Imports the Google Cloud client library
const { Storage } = require('@google-cloud/storage');
const { v4: uuidv4 } = require('uuid');

const storage = new Storage({
  projectId: process.env.FIREBASE_PROJECTID,
  keyFilename: 'serviceAccountKey.json',
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

async function getUserFiles(user_id) {
  const options = {
    version: 'v4',
    action: 'read',
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
  };
  const [files] = await storage.bucket(bucketName).getFiles({
    prefix: `Candidates/${user_id}/`,
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

module.exports = {
  config,
  uploadFile,
  deleteFolder,
  getUrlFIle,
  getUserFiles,
  uploadThesis,
};
