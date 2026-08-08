const express = require("express")
const cors = require("cors");
const indexRoute = require("./routes/routes")
const authRoute = require("./routes/auth");

const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

console.log(process.env);
console.log(process.env.MONGO_URL);

const app = express()
app.use(cors());
const port = 8000

app.use(express.json());

app.use("/auth", authRoute);
app.use("/", indexRoute);
   

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.listen(port, () => console.log("server started at the port,"+port))
