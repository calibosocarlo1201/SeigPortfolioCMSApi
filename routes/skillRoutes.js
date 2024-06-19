import express from 'express'
import { createSkill, getSkills, getSkill, updateSkill, deleteSkill } from '../controllers/skillController.js'
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createSkill);
router.get('/', getSkills);
router.get('/:id', getSkill);
router.put('/:id', protect, updateSkill);
router.delete('/:id', protect, deleteSkill);

export default router;