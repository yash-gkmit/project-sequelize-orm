const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./config/database.js");

const app = express();
app.use(express.json());
dbConnection();

app.get("/", (req, res) => {
    res.send("Hello world");
});

const PORT = process.env.PORT || 4400;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
