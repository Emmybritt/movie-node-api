"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const env_config_1 = __importDefault(require("../config/env.config"));
const movie_controller_1 = __importDefault(require("../controllers/movie.controller"));
const movie_validator_1 = __importDefault(require("../validator/movie.validator"));
const middleware_1 = __importDefault(require("../middleware"));
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    res.send(`Welcome to the Geogo API! ${env_config_1.default.nodeEnv}`);
});
router.get('/movies', movie_controller_1.default.getAllMovies);
router.post('/create/movie', movie_validator_1.default.checkCreateMovieReq(), middleware_1.default.handleValidationError, movie_controller_1.default.createMovies);
router.get('/movie/:id', movie_validator_1.default.checkParamId(), middleware_1.default.handleValidationError, movie_controller_1.default.getMovieById);
router.delete('/delete-movie/:id', movie_validator_1.default.checkParamId(), middleware_1.default.handleValidationError, movie_controller_1.default.deleteMovieById);
router.patch('/update-movie/:id', movie_validator_1.default.checkParamId(), middleware_1.default.handleValidationError, movie_controller_1.default.updateMovie);
