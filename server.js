import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/userRoutes.js'

const app = express();
dotenv.config();

app.use(express.json());

app.use('/api/users', userRoute);

mongoose.connect(process.env.DB)
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error));

const PORT = process.env.PORT || 8523

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});