import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import skillRoute from './routes/skillRoutes.js'
import expRoute from './routes/experienceRoute.js'
import projectRoute from './routes/projectRoute.js'
import userRoute from './routes/userRoute.js'
import imageRoute from './routes/imageRoute.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url';
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors({
    origin: 'http://localhost:5173', // frontend domain
    credentials: true
}));

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to mongodb");
}).catch((err) => {
    console.log(err)
});

app.listen(3000, () => {
    console.log("Server is running on port 3000!!");
});

app.use('/api/images', imageRoute);
app.use("/api/skill", skillRoute);
app.use("/api/experience", expRoute);
app.use("/api/projects", projectRoute);
app.use("/api/user", userRoute);
