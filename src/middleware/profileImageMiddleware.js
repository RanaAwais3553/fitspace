import multer from 'multer'
// const multer = require('multer');
// const path = require('path');
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import upload from '../uploads/'
// Set up storage configuration for multer 
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, '../uploads/')
    // cb(null, __dirname);
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

// File filter for accepting only image types
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true); 
  } else {
    cb(new Error('Invalid file type, only images are allowed!'), false);
  }
};

// Initialize multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});
export default upload
// module.exports = upload;
