import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

mongoose
  .connect("mongodb://localhost:27017/users")
  .then(() => console.log("database connected..."))
  .catch(() => console.log("error connecting database..."));

app.listen(3001, () => {
  console.log("connected to port 3001");
});

app.use(bodyParser.json());
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "*"],
    credentials: true,
  })
);

app.use("/api/user", userRoutes);
