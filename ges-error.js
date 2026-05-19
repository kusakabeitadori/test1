const express = require("express");
const logger = require("morgan");
const app = express();

app.use(logger("dev"));

app.use(function(err,req,res,next)
{
     console.error(err.stack);
     res.status(500).send("");

});


