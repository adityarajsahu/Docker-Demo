import { config } from "dotenv";
config();

import express from "express";
import morgan from "morgan";

import todosRoutes from "./routes/todosRoutes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/todos", todosRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
