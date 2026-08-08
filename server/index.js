const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const indexRoute = require("./routes/routes");
const authRoute = require("./routes/auth");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/", indexRoute);

const PORT = process.env.PORT || 8000;

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log(" MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(" MongoDB Connection Failed");
    console.error(err);
  }
}

startServer();