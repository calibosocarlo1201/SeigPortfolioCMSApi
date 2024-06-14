import Skill from '../models/skill.js'

export const createSkill = async (req, res) => {

    const { name } = req.body;

    try {

        const skillExist = await Skill.findOne({ name });

        if(skillExist){
            return res.status(500).json({message: `Skill name: ${name} already exist`});
        }

        const skill = new Skill(req.body);
        skill.save();

        res.status(200).json({message: `New skill has been added Successfully`});
    } catch (error) {
        res.status(400).send(error);
    }   
}

export const getSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).json(skills);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getSkill = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.id);

        if(!skill){
            return res.status(404).json({ message: "No item found"});
        }
        res.status(200).json(skill)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateSkill = async (req, res) => {
    console.log(req.body)
    try {
        const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true});

        if(!skill){
            return res.status(404).json({message: "No item found or updated"});
        }
        res.status(200).json(skill)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const deleteSkill = async ( req, res ) => {
    try {
        const skill = await Skill.findByIdAndDelete(req.params.id);

        if (!skill) return res.status(404).json({message: "No item found!"});
        res.status(200).json({message: "Item has been deleted!"});
        
    } catch (error) {
        res.status(400).json(error);
    }
}