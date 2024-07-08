import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Controller for uploading an image
export const uploadImage = (req, res) => {
  upload.single('file')(req, res, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to upload image' });
    }
    res.json({ url: `/uploads/${req.file.filename}` });
  });
};

// Controller for getting all uploaded images
export const getImages = (req, res) => {
  fs.readdir(path.join(__dirname, '../uploads'), (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to retrieve images' });
    }
    const images = files.map(file => ({ url: `/uploads/${file}`, name: file }));
    res.json(images);
  });
};
