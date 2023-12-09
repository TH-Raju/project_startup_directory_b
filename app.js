import express from "express";
import cors from "cors";
import { startupRoutes } from "./routes/startup.route.js";
// import { startupRoutes } from "./routes/startup.route";
const json = express.json;
const app = express();

app.use(cors());
app.use(json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", startupRoutes);

app.get("/", (req, res) => {
  res.send("Server working....");
});

app.get("*", (req, res) => {
  res.send("No Route Found");
});

export default app;
