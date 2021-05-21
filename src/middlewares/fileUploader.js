const multer = require('multer');

const storage = multer.memoryStorage();

const ALLOWED_MIMES = ['application/pdf'];

const config = {
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024, // keep images size < 2 MB
  },
  fileFilter: (req, file, cb) => {
    if (ALLOWED_MIMES.includes(file.mimetype)) cb(null, true);
    else cb({ error: 'Invalid file type' });
  },
};
const fileUploaderHandler = (fileName) => {
  const uploader = multer(config).single(fileName);

  return (req, res, next) => {
    uploader(req, res, (err) => {
      if (err) return res.status(400).send(err);
      if (!req.file && !req.body[fileName])
        return res.status(400).json({ error: `${fileName} is required` });

      return next();
    });
  };
};

module.exports = fileUploaderHandler;
