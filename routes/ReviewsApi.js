import { Router } from 'express';
import Review from '../models/Review.js';

const router = Router();

router.get('/', async (req, res) => {
    const review = await Review.find({}).sort({ createdAt: -1 });
    res.send({ data: review });
});

router.post('/', async (req, res) => {
    const { movie, name, rating, comments } = req.body;
    const review = new Review({
        movie,
        name,
        rating,
        comments,
    })
    await review.save();
    res.json({ message: "Success" });
});

export default router;