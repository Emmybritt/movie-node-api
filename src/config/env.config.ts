import dotenv from "dotenv";
dotenv.config();

const config = {
	host: process.env.HOST || "",
	port: process.env.PORT || "",
	nodeEnv: process.env.NODE_ENV || "",
	databaseUrl: process.env.NODE_ENV === "production" ? process.env.DB_URL || "" : "postgres://postgres:baped@localhost:5432/affilbase",
	dialect: process.env.DB_DIALECT || "postgres",
	dbCreds: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		dialect: process.env.DB_DIALECT,
		host: process.env.DB_HOST,
		db: process.env.DB,
	},
};

export default config;
