const express = require('express');
const app = express();
require("dotenv").config()
require("./config/db")

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})