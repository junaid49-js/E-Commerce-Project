import mongoose from "mongoose";

const connectDB = async () => {
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
};

export default connectDB;
