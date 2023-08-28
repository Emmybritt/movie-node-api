import { Request, Response } from 'express';
import movie from '../models/movie.model';

class MoviesController {
    async getAllMovies(req: Request, res: Response) {
        try {
            const page = parseInt(
                (req.query.page as string | undefined) || '1',
            );
            const pageSize = parseInt(
                (req.query.pageSize as string | undefined) || '1000',
            );
            const title = req.query.title as string | undefined;
            const year = parseInt(
                (req.query.year as string | undefined) || '0',
            );
            const genre = req.query.genre as string | undefined;

            const skip = (page - 1) * pageSize;
            let query: any = {};

            if (title) {
                query.title = { $regex: title, $options: 'i' };
            }

            if (year > 0) {
                query.year = year;
            }

            if (genre) {
                query.genre = genre;
            }

            const movies = await movie.find(query).skip(skip).limit(pageSize);
            const totalCount = await movie.countDocuments(query);

            return res.status(200).json({
                msg: 'Movies found',
                status: true,
                movies,
                total: totalCount,
                page,
                pageSize,
            });
        } catch (error) {
            console.error(error);
            return res
                .status(500)
                .json({ msg: 'An Error Occurred', status: false });
        }
    }

    async createMovies(req: Request, res: Response) {
        const {
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
        } = req.body;
        try {
            const newMovie = await movie.create({
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
        } catch (error) {
            console.log(error);

            return res
                .status(500)
                .json({ msg: 'An Error Occured', status: false });
        }
    }

    async getMovieById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await movie.findById(id);
            return res
                .status(200)
                .json({ msg: 'Movie found', result, status: true });
        } catch (error) {
            return res.status(500).json({
                msg: 'An Error Occured please try again',
                status: false,
            });
        }
    }

    async deleteMovieById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await movie.deleteOne({ _id: id });
            return res
                .status(200)
                .json({ msg: 'Movie deleted successfully', status: true });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: 'An Error Occured please try again',
                status: false,
            });
        }
    }

    async updateMovie(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await movie.updateOne({ _id: id }, { ...req.body });
            return res
                .status(200)
                .json({ msg: 'Movie updated successfully', status: true });
        } catch (error) {
            return res.status(500).json({
                msg: 'An Error Occured please try again',
                status: false,
            });
        }
    }
}
export default new MoviesController();
