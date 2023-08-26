import * as http from 'http';
import app from './app';
import env from './config/env.config';
import connectDb from './config/database.config';

const server = http.createServer(app);
server.listen(env.port, async () => {
    console.log(`Listening on port ${env.port}`);
    await connectDb();
});
