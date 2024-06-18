import mongoose from 'mongoose'

const experienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    company: String,
    description: String,
    skills: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skills'
    }
}, {timestamps: true,})

export default mongoose.model('Experience', experienceSchema);