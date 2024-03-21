import mongoose from "mongoose";
import  Express  from "express";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB!!!');
}).catch(err => {  
    console.log('Error: ', err.message);
});
const app = Express();
app.listen(3000, () => {
    console.log('App listening on port 3000!!!');
});