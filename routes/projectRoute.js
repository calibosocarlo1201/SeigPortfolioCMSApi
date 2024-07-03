import express from 'express'
import { createProject, getProjects, getProject, updateProject, deleteProject } from '../controllers/projectController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', createProject);
router.get('/', getProjects);
router.get('/:id', getProject);
router.put('/:id', protect, updateProject);
router.delete('/:id', protect, deleteProject);

export default router;