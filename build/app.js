"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: [
        'http://localhost:5173',
        'https://endearing-gingersnap-e1b5d6.netlify.app',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: false,
}));
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/api/v1', routes_1.router);
exports.default = app;
