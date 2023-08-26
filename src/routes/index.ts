import { Router, Request, Response } from 'express';
import envConfig from '../config/env.config';
import movieController from '../controllers/movie.controller';
import movieValidator from '../validator/movie.validator';
import middleware from '../middleware';

const router = Router();
router.get('/', (req: Request, res: Response) => {
    res.send(`Welcome to the Geogo API! ${envConfig.nodeEnv}`);
});

router.get('/movies', movieController.getAllMovies);
router.post(
    '/create/movie',
    movieValidator.checkCreateMovieReq(),
    middleware.handleValidationError,
    movieController.createMovies,
);
router.get(
    '/movie/:id',
    movieValidator.checkParamId(),
    middleware.handleValidationError,
    movieController.getMovieById,
);

router.delete(
    '/delete-movie/:id',
    movieValidator.checkParamId(),
    middleware.handleValidationError,
    movieController.deleteMovieById,
);

router.patch(
    '/update-movie/:id',
    movieValidator.checkParamId(),
    middleware.handleValidationError,
    movieController.updateMovie,
);

export { router };
