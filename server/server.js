import express, { json } from "express";
import mongoose from "mongoose";
import routes from "./routes/index.js";

const { connect, connection } = mongoose;

const mongoURI = process.env.MONGODB_URL,
  port = process.env.PORT;

connect(mongoURI);

const db = connection;

db.on("error", (error) => console.log(error));
db.once("connected", () => console.log("Database connection"));

const app = express();

app.use(json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server listening on PORT: ${port}`);
});
