import express from "express";
import cors from "cors";
import "dotenv/config.js";
import mongoose from "mongoose";
import { v2 as cloudinary } from 'cloudinary'

const app = express();
const port = 4000;

(async () => {
    try{
        mongoose.connection.once('connected', () => {
            console.log('Database connected')
        });
        mongoose.connection.on('error', (err) => {
            console.error('Database error:', err);
        });
        mongoose.connection.on('disconnected', () => {
            console.log('Database disconnected');
        });
        await mongoose.connect(`${process.env.MONGODB_URI}`)
    } catch(error) {
        console.log(`Database Connection error: ${error}`)
    }
})();


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const productSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
  category: {type: String, required: true},
  subCategory: {type: String, required: true},
  sizes: {type: Array, required: true},
  image: {type: Array, required: true},
  bestSeller: {type: Boolean},
  date: {type: Number, requred: true}
   
})

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  cartData: {type: Object, default: {}}
},{minimize: false})

const productModel = mongoose.models.product || mongoose.model('product', productSchema)
const userModel = mongoose.models.user || mongoose.model('user', userSchema)

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("API is Working.");
});

app.listen(port, () => console.log(`Server started on port ${port}`));
