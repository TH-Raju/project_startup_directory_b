import mongoose from "mongoose";
// import config from "./config/index";
import data from "./config/index.js";
import app from "./app.js";
const port = data.PORT || 5000;

async function server() {
  try {
    await mongoose.connect(data.db_url).then(() => {
      console.log(`Databse Connection is successful`);
    });
    app.listen(port, () => {
      console.log(`Server Running on ${port}`);
    });
  } catch (error) {
    console.log(`Failed to Connect Database!!`);
  }
}

server();
