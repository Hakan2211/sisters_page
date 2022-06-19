import express from "express";
import connectDB from "./database/connectDB.js";
import dotenv from "dotenv";
import "express-async-errors";
import morgan from "morgan";
import rateLimiter from "express-rate-limit";
import helmet from "helmet";
import xss from "xss-clean";
import cors from "cors";

import authRouter from "./modules/auth/auth.routes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.set("trust proxy", 1);

app.use(
  rateLimiter({
    windowsMs: 15 * 60 * 1000,
    max: 60,
  })
);

app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());
app.use(xss());

app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(PORT, console.log(`Server is running at port ${PORT}`));
