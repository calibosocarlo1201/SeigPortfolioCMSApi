import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import skillRoute from './routes/skillRoutes.js'
import expRoute from './routes/experienceRoute.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to mongodb");
}).catch((err) => {
    console.log(err)
});

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000!!");
});


app.use("/api/skill", skillRoute);
app.use("/api/experience", expRoute);
