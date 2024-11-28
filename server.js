import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/userRoutes.js'
import adminRoute from './routes/adminRoutes.js'
import moderatorRoute from './routes/moderatorRoutes.js'

const app = express();
dotenv.config();

app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/admin',adminRoute);
app.use('/api/moderator',moderatorRoute);

mongoose.connect(process.env.DB)
    .then(() => console.log("Database Connected"))
    .catch((error) => console.log(error));

const PORT = process.env.PORT || 8523

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});