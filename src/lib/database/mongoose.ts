import mongoose, { Mongoose } from "mongoose";

const DB_NAME = process.env.MONGO_DB_NAME;
const DB_URL = process.env.MONGO_DB_URL;

interface MongooseConnection {
	conn: Mongoose | null;
	promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
	cached = (global as any).mongoose = {
		conn: null,
		promise: null,
	};
}

export const connectToDatabase = async () => {
	if (cached.conn) return cached.conn;
	if (!DB_URL || DB_NAME) throw new Error("Database Credentials Not Defined");
	cached.promise =
		cached.promise ||
		mongoose.connect(DB_URL, { dbName: DB_NAME, bufferCommands: false });
	cached.conn = await cached.promise;
	return cached.conn;
};
