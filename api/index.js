import mongoose from 'mongoose';
import  Express  from 'express';
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js"



dotenv.config(); 
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB!!!');
}).catch(err => {  
    console.log('Error: ', err.message);
});
const app = Express();


app.listen(5000, () => {
    console.log('App listening on port 5000!!!');
});
app.use('/api/user', userRouter);
