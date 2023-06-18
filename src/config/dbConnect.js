import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Matheus:AluraNode123@alura.lg6ddwx.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;