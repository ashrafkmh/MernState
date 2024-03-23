import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
export const signup = async(req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 12);
    const newUser = new User({ username, email, password: hashedPassword});
   try {
   
   
    await newUser.save();
      
       res.status(201).json('Signup success! Please sign');
   
    
}
catch
(err) {
    next(err)    ;
}
};
export const signin = async(req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });        
        if (!user) {
            errorHandler(404, 'User not found');
        } 
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            errorHandler(401, 'Invalid password');
        }   
        res.status(200).json('Signin success!');    
        const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const { password: pass, ...rest } = user._doc;
       res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ ...rest, token });
        
    }
    catch (err) {
        next(err);              
    }   }