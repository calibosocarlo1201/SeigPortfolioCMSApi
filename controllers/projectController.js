import mongoose from 'mongoose';
import Project from '../models/project.js'

export const createProject = async (req, res) => {
    try {

        const project = new Project(req.body);
        await project.save();

        res.status(200).json({message: "Project has been added."});
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
}

export const getProjects = async (req, res) => {
    try {
        
        const projects = await Project.find();
        res.status(200).json({projects})

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const getProject = async (req, res) => {
    try {

        // Check if the provided ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid ID count!" });
        }
        
        const project = await Project.findById(req.params.id);

        if(!project) return res.status(404).json({message: "No record found!"});
        res.status(200).json(project);

    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
}

export const updateProject = async (req, res) => {
    try {

        // Check if the provided ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid ID count!" });
        }

        const {_id, ...updateProject} = req.body;
        
        const project = await Project.findByIdAndUpdate(req.params.id, updateProject, { new: true });
        
        if(!project) return res.status(404).json({message: "No item found or updated."});
        res.status(200).json(project);

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const deleteProject = async (req, res) => {
    try {

        // Check if the provided ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid ID count!" });
        }

        const delProject = await Project.findByIdAndDelete(req.params.id);

        if(!delProject) return res.status(404).json({message: "No item found or deleted"});
        res.status(200).json({message: "Item has been deleted successfully!"});
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}