"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_model_1 = __importDefault(require("../models/movie.model"));
class MoviesController {
    async getAllMovies(req, res) {
        try {
            const page = parseInt(req.query.page || '1');
            const pageSize = parseInt(req.query.pageSize || '1000');
            const title = req.query.title;
            const year = parseInt(req.query.year || '0');
            const genre = parseInt(req.query.genre || '0');
            const skip = (page - 1) * pageSize;
            let query = {};
            if (title) {
                query.title = { $regex: title, $options: 'i' };
            }
            if (year > 0) {
                query.year = year;
            }
            if (genre > 0) {
                query.genre = { $regex: genre, $options: 'i' };
            }
            const movies = await movie_model_1.default.find(query).skip(skip).limit(pageSize);
            const totalCount = await movie_model_1.default.countDocuments(query);
            return res.status(200).json({
                msg: 'Movies found',
                status: true,
                movies,
                total: totalCount,
                page,
                pageSize,
            });
        }
        catch (error) {
            console.error(error);
            return res
                .status(500)
                .json({ msg: 'An Error Occurred', status: false });
        }
    }
    async createMovies(req, res) {
        const { country, director, genre, title, plotSummary, rating, posterURL, trailerURL, releaseYear, releaseDate, badge, duration, } = req.body;
        try {
            const newMovie = await movie_model_1.default.create({
                country,
                director,
                genre,
                title,
                plotSummary,
                rating,
                posterURL,
                trailerURL,
                releaseYear,
                releaseDate,
                badge,
                duration,
            });
            newMovie.save();
            return res
                .status(201)
                .json({ msg: 'Movie created successfully', status: true });
        }
        catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ msg: 'An Error Occured', status: false });
        }
    }
    async getMovieById(req, res) {
        const { id } = req.params;
        try {
            const result = await movie_model_1.default.findById(id);
            return res
                .status(200)
                .json({ msg: 'Movie found', result, status: true });
        }
        catch (error) {
            return res.status(500).json({
                msg: 'An Error Occured please try again',
                status: false,
            });
        }
    }
    async deleteMovieById(req, res) {
        const { id } = req.params;
        try {
            await movie_model_1.default.deleteOne({ _id: id });
            return res
                .status(200)
                .json({ msg: 'Movie deleted successfully', status: true });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'An Error Occured please try again',
                status: false,
            });
        }
    }
    async updateMovie(req, res) {
        const { id } = req.params;
        try {
            await movie_model_1.default.updateOne({ _id: id }, { ...req.body });
            return res
                .status(200)
                .json({ msg: 'Movie updated successfully', status: true });
        }
        catch (error) {
            return res.status(500).json({
                msg: 'An Error Occured please try again',
                status: false,
            });
        }
    }
}
exports.default = new MoviesController();
