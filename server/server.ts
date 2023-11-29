import path from "path";
import express, { Express, Router } from "express";
import cors from "cors";

import { taskRouter } from "./tasks/tasks.routes";

const app: Express = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRouter);

app.listen(port, () => {
  console.log(`[SERVER] listening on port ${port}`);
});
