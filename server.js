import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import skillRoute from './routes/skillRoutes.js'
import expRoute from './routes/experienceRoute.js'
import projectRoute from './routes/projectRoute.js'
import userRoute from './routes/userRoute.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173', // Allow only this origin to access the server
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
}));

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to mongodb");
}).catch((err) => {
    console.log(err)
});

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log("Server is running on port 3000!!");
});


app.use("/api/skill", skillRoute);
app.use("/api/experience", expRoute);
app.use("/api/projects", projectRoute);
app.use("/api/user", userRoute);
