// lib/db.js
import mongoose from "mongoose";

let isConnected = false; // Track the connection status

export async function connectDb() {
    if (isConnected) {
        console.log("=> Using existing database connection");
        return;
    }

    try {
         await mongoose.connect(process.env.DB_URI!);
        isConnected = true;
        console.log("=> New database connection established");
    } catch (error) {
        console.error("Database connection error:", error);
        throw new Error("Database connection failed");
    }
}
