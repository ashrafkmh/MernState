import mongoose from 'mongoose';
import  Express  from 'express';
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";



dotenv.config(); 
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB!!!');
}).catch(err => {  
    console.log('Error: ', err.message);
});
const app = Express();
app.use(Express.json());



app.listen(5000, () => {
    console.log('App listening on port 5000!!!');
});
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err,req, res, next) => {
    const statusCode= err.statusCode || 500; 
const message = err.message || 'Internal Server Error';
return res.status(statusCode).json({
    success: false,
  statusCode,
message,
});
});

