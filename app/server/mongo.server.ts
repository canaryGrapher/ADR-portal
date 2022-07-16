import mongoose, { connect } from "mongoose";
const MONGODB_URI = process.env.DATABASE_URI || "mongodb://localhost:27017/adrportal";

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
declare global {
    var mongoose: any;
}
let cached = global.mongoose
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

/**
 * @function dbConnect
 * @description This function is used to connect to the database.
 * @returns mongoose.Promise
 */
async function dbConnect() {
    if (cached.conn) {
        console.log("🚦🚥 MongoDB was already connected");
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            console.log("🌿🍀 MongoDB is now connected");
            return mongoose
        })
    }
    cached.conn = await cached.promise
    return cached.conn
}

export default dbConnect