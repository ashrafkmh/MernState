import mongoose from "mongoose";    // Import mongoose

// Define the User schema
const UserSchema = new mongoose.Schema({
    username: {type: String ,required: true,uniqaue: true},

    email: {type: String ,required: true,uniqaue: true},
    password: {type: String ,required: true},
}, {timestamps: true});
const User = mongoose.model('User', UserSchema); // Create a User model from the User schema
export default User; // Export the User model
