import express from 'express'
import { expCreate, getExpList, getExp, updateExp, deleteExp } from '../controllers/experienceController.js'

const router = express.Router();

router.post('/', expCreate);
router.get('/', getExpList);
router.get('/:id', getExp);
router.put('/:id', updateExp);
router.delete('/:id', deleteExp);

export default router;
