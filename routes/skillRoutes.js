import express from 'express'
import { createSkill, getSkills, getSkill, updateSkill, deleteSkill } from '../controllers/skillController.js'

const router = express.Router();

router.post('/', createSkill);
router.get('/', getSkills);
router.get('/:id', getSkill);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);

export default router;