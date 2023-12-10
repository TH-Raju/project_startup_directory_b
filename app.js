import express from "express";
import cors from "cors";
import { startupRoutes } from "./routes/startup.route.js";
// import { startupRoutes } from "./routes/startup.route";
const json = express.json;
const app = express();

const corsConfig = {
  origin: "*",
  credentials: true,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
};

app.use(cors(corsConfig));
app.use(json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/startup", startupRoutes);

app.get("/", (req, res) => {
  res.send("Server working....");
});

app.get("*", (req, res) => {
  res.send("No Route Found");
});

export default app;
