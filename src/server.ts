import * as http from "http";
import app from "./app";
import env from "./config/env.config";

const server = http.createServer(app);
server.listen(env.port, () => {
	console.log(`Listening on port ${env.port}`);
});
