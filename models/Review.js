import mongoose from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema({
    movie: String,
    name: String,
    rating: Number,
    comments: String,
    createdAt: { type: Date, default: Date.now },
});

export default new mongoose.model('Review', reviewSchema);