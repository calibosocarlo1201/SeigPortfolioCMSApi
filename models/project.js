import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    skills: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill'
    }],
    images: [{
        type: String,
        default: ["https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"]
    }]
}, {timestamps: true,});

export default mongoose.model('Project', projectSchema);