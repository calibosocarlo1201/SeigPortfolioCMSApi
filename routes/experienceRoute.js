import express from 'express'
import { expCreate, getExpList, getExp, updateExp, deleteExp } from '../controllers/experienceController.js'
import {protect} from '../middlewares/authMiddleware.js'

const router = express.Router();

router.post('/', protect, expCreate);
router.get('/', getExpList);
router.get('/:id', getExp);
router.put('/:id', protect, updateExp);
router.delete('/:id', protect, deleteExp);

export default router;
