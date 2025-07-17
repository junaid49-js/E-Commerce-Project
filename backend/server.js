import express from "express";
import cors from "cors";
import "dotenv/config.js";
import userRouter from "./routes/userRoute.js";
import connectDB from "./config/connect_mongodb.js";
import connectCloudinary from "./config/connect_cloudinary.js";
import productRouter from "./routes/productRoute.js";

const app = express();
const port = 4000;
connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

app.get("/", (req, res) => {
    res.send("API is Working.");
});

app.listen(port, () => console.log(`Server started on port ${port}`));
