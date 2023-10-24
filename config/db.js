import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/testing";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Mongo Database Connected");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

export default connectDB;
