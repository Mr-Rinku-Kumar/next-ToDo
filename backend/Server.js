const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const routes = require("./routes/ToDoRoutes")

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => {
        console.log(err);
    });

app.use("/api", routes)

app.listen(PORT, () => console.log(`Server listening at ${PORT}`));
