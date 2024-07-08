import express from 'express'
import { getImages, uploadImage } from '../controllers/imageController.js';

const router = express.Router();

router.post('/upload', uploadImage);
router.get('/', getImages)

export default router;