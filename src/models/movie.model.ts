import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.ObjectId;

const movieSchema = new Schema(
    {
        _id: { type: objectId, auto: true },
        title: { type: String, required: true },
        genre: { type: String, required: true },
        director: { type: String },
        country: { type: String },
        duration: { type: String, required: true },
        plotSummary: { type: String, required: true },
        badge: { type: String, required: true },
        posterURL: { type: String, required: true },
        trailerURL: { type: String },
        rating: { type: Number, default: 4 },
        releaseYear: { type: Number, required: true },
        releaseDate: { type: Date },
        createdAt: { type: Date, default: Date.now() },
        updatedAt: { type: Date, default: Date.now() },
    },
    { versionKey: false },
);

const movie = mongoose.model('movies', movieSchema);

export default movie;
