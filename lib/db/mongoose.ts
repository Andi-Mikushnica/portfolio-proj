import mongoose from "mongoose";

let isConnected = false;

export default async function connectionToDatabase() {
  if (isConnected || mongoose.connection.readyState === 1) {
    return;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("Missing MONGO_URL environment variable");
  }

  try {
    await mongoose.connect(uri, {
      dbName: "messages", 
    });

    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
}