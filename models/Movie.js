import mongoose from "mongoose";
const { Schema } = mongoose;

const movieSchema = new Schema({
    name: String,
    date: { type: Date, default: new Date() },
    createdAt: { type: Date, default: Date.now },
});

export default new mongoose.model('Movie', movieSchema);