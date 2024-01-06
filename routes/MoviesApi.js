import { Router } from 'express';
import Movie from '../models/Movie.js';

const router = Router();

router.get('/', async (req, res) => {
    const movie = await Movie.find({}).sort({ createdAt: -1 });
    res.send({ data: movie });
});

router.post('/', async (req, res) => {
    const { name, releaseDate } = req.body;
    const movie = new Movie({
        name,
        releaseDate,
    })
    await movie.save();
    res.json({ message: "Success" });
});

router.delete('/:id', async (req, res) => {
    await Movie.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "Success" });
});

router.patch('/:id', async (req, res) => {
    await Movie.updateOne({ _id: req.params.id }, { $set: req.body });
    res.json({ message: "Success" });
});

export default router;