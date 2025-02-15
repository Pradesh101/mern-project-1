import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected successfully: ${conn.connection.host}`); // replace with your own logging mechanism
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // process code 1 means exit with failure , 0 means success
  }
};
