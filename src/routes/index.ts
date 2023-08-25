import { Router, Request, Response } from "express";
import envConfig from "../config/env.config";

const router = Router();
router.get("/", (req: Request, res: Response) => {
	res.send(`Welcome to the Geogo API! ${envConfig.nodeEnv}`);
});

export { router };
