// Imports the Google Cloud client library
const { Storage } = require('@google-cloud/storage');
const { v4: uuidv4 } = require('uuid');

// Creates a client from a Google service account key.
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

async function listFiles() {
  // Lists files in the bucket
  const [files] = await storage.bucket(bucketName).getFiles();

  console.log('Files:');
  files.forEach((file) => {
    console.log(file.name);
  });
}

async function getDefaultProfileImages(user_id) {
  // Lists files in the bucket
  const [files] = await storage
    .bucket(bucketName)
    .getFiles({ prefix: `User/${user_id}/` });

  const list = [];
  files.forEach((file) => {
    if (file.metadata.size > 0) list.push(file.name);
  });

  return list;
}

async function uploadFile(file, userId, prefix = '') {
  return new Promise((resolve, reject) => {
    const fileName = `${file.originalname.replace('.', '-')}-${Date.now()}`;

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

async function deleteFile(filename) {
  // Deletes the file from the bucket
  await storage.bucket(bucketName).file(filename).delete();
}

module.exports = {
  config,
  listFiles,
  uploadFile,
  deleteFile,
  getDefaultProfileImages,
};
