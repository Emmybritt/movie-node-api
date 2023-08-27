import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { router } from './routes';

const app = express();
// app.use();
app.use(function (req, res, next) {
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept',
    );
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(
    cors({
        credentials: false,
        origin: ['http://localhost:5173'],
        // preflightContinue: true,
        allowedHeaders: [
            'Origin, X-Requested-With, Content-Type, Accept',
            'Authorization',
            'Host',
            'User-Agent',
        ],
    }),
);
app.use(helmet());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', router);

export default app;
