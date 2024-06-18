import mongoose from 'mongoose'

const SkillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true,});

export default mongoose.model('Skill', SkillSchema);