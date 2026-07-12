const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(
    cors({
      origin: "*"
    })
  );
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(err => {
    console.log(err);
  });

app.use("/api/auth",
  require("./routes/auth")
);

app.use("/api/events",
  require("./routes/events")
);

app.get("/", (req, res) => {
  res.send("EventHub API Running");
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port ${process.env.PORT}`
  );
});