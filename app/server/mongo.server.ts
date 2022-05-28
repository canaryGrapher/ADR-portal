import mongoose, { connect } from "mongoose";

declare global {
    var mongoose: any;
}

const MONGODB_URI = process.env.DATABASE_URI

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

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

        // @ts-ignore
        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            console.log("🌿🍀 MongoDB is now connected");
            return mongoose
        })
    }
    cached.conn = await cached.promise
    return cached.conn
}

export default dbConnect