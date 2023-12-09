import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const data = {
  db_url: process.env.db_url,
  PORT: process.env.PORT,
};

export default data;
