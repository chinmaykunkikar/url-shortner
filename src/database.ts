import config from "config";
import mongoose from "mongoose";

async function database() {
  const dbUri = String(config.get("dbUri"));

  try {
    await mongoose
      .connect(dbUri)
      .then(() => console.log(`Database connection successful to ${dbUri}`));
  } catch (error) {
    console.error(error);
  }
}

export default database;
