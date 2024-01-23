const express = require("express");
const app = express();

const morgan = require("morgan");
const dotenv = require("dotenv");
const helmet = require("helmet");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

const iprRoute = require("./routes/iprs");

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: process.env.BASE_URL,
  })
);

app.use("/api/ipr", iprRoute);

app.get("/", (req, res) => {
  res.send("Welcome to my site");
});

mongoose.connect(process.env.MONGO_URL).then(
  () => {
    console.log("Connected to MongoDB");
    app.listen(8800, () => {
      console.log("Backend server is runnng");
    });
  },
  (err) => {
    console.log(err);
  }
);
