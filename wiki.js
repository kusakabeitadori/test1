const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>
{
     res.send("Page d'accueil de WIKI");
});

router.get("/about",(req,res)=>
{
     res.send("Page à propos du wiki");
});

router.get("/contact",(req,res)=>
{
     res.send("Page de contact du wiki");
});

module.exports = router;