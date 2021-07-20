import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
    title: {
        type: String,
    },
    mainImage: {
        type: String,
    },
    images: {
        type: Array,
    },
    description: {
        type: String,
    },
    nameID: {
        type: String,
    },
})

const movie = mongoose.model('Movies', movieSchema);

export default movie;