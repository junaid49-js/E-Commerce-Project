import userModel from "../models/userModel.js";
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

const loginUser = async function(req, res){
    try {
        
        const {email, password} = req.body;

        const userExists = await userModel.findOne({email});
        if(!userExists){
            return res.json({success: false, message: "User Doesn't Exists"})
        }

        const isMatch = await bcrypt.compare(password, userExists.password);

        if (isMatch) {
            const token = createToken(userExists._id);
            res.json({success:true,token})
        } else{
            res.json({success:false, message: "Invalid credentials"})
        }

    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
    }
}

const registerUser = async function(req,res){
    try {
        const {name, email, password} = req.body;

        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success: false, message: 'User Already Exists'})
        }

        if(!validator.isEmail(email)) {
            return res.json({success: false, message: 'Please enter a valid email'})
        }

        if(password.length < 8){
            return res.json({success:false, message:"Please enter a strong password"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save();

        const token = createToken(user._id);

        res.json({success:true, token})

    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
    }
}

const adminLogin = async function(req,res){
    try {
        
        const {email, password} = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({success:true,token});
        } else {
            res.json({success:false,message:'Invalid Credentials'})
        }

    } catch (error) {
        console.log(error);
        res.json({success:false, message: error.message})
    }
}

export {loginUser, registerUser, adminLogin}
