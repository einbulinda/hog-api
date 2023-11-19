const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/index");

const mongoString = process.env.MONGODB_URL,
  port = process.env.PORT;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => console.log(error));
database.once("connected", () => console.log("Database connection"));

const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server listening on PORT: ${port}`);
});
