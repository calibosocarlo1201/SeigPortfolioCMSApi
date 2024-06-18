import Experience from "../models/experience.js";

export const expCreate =  async (req, res) => {

    const {title} = req.body;

    try {

        // const expExist = await Experience.findOne({title});

        // if(expExist) return res.status(500).json({message: `Experience title: ${title} is already exist`});

        const newExp = new Experience(req.body);
        await newExp.save();

        res.status(200).json({message: "Experience added successfully!"});
        
    } catch (error) {
        res.status(400).json(error);
    }

}

export const getExpList = async (req, res) => {
    try {
        
        const exp = await Experience.find();
        res.status(200).json(exp);

    } catch (error) {
        res.status(500).send(error);
    }
}

export const getExp = async (req, res) => {
    try {

        const exp = await Experience.findById(req.params.id);
        if(!exp) return res.status(500).json({message: "No item found!"});
        res.status(200).json(exp)
        
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export const updateExp = async (req, res) => {
    try {

        const updatedExp = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!updatedExp) return res.status(500).json({message: "No item found or updated."});
        res.status(200).json(updatedExp);

    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteExp = async (req, res) => {
    try {
        
        const deletedExp = await Experience.findByIdAndDelete(req.params.id);
        if(!deletedExp) return res.status(400).json({message: "No item found or deleted"});
        res.status(200).json({message: "Item deleted successfully"});

    } catch (error) {
        res.status(500).json(error);
    }
}