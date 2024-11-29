import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/user";

const app = express();

app.use(bodyParser.json());
app.use("/users", userRoutes);

export default app;
