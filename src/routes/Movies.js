import express from 'express';
import Movie from '../models/Movie.js';

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const query = Movie.find({}); // empty object - gets all the data
        const movies = await query.exec();
        res.json(movies);
    } catch (err) {
        res.json({ error: true, message: err });
    }
});

router.post('/', async(req, res) => {
    const newMovieData = {
        title: req.body.title,
        images: req.body.images,
        description: req.body.description,
    }
    const movie = new Movie(newMovieData);
    try {
        const movieEntity = await movie.save();
        res.json(movieEntity);
    } catch (err) {
        res.json({ error: true, message: err });
    }
});

router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const query = Movie.deleteOne({
            _id: id
        });
        await query.exec();
        res.json({ success: true });

    } catch (err) {
        res.json({ error: true, message: err });
    }
});

export default router;