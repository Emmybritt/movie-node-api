"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    host: process.env.HOST || "",
    port: process.env.PORT || "",
    nodeEnv: process.env.NODE_ENV || "",
    databaseUrl: process.env.DB_URL || "",
    dialect: process.env.DB_DIALECT || "postgres",
    dbCreds: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        dialect: process.env.DB_DIALECT,
        host: process.env.DB_HOST,
        db: process.env.DB,
    },
};
exports.default = config;
