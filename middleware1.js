const express = require("express");
const logger = require("morgan");
const app = express();

//un exemple de fonction middleware

let a_middleware_function = function(req,res,next)
{
     next(); 
     // call next() pour qu'express appelle la function middleware suivante ds la chaine


};


//function ajouter avec use() pour toute les routes
app.use(a_middleware_function);

app.add(a_middleware_function);

//function ajouter avec use() pour 
//pour une route specifique
app.use("/une_route",a_middleware_function);


//une function middleware ajouter pour un verbe et une rooute http
//specifique

app.use("/",a_middleware_function);
app.listen(3000);


app.use(express.static("public"));

//Vous pouvez appeler plusieur static() pour servir plusieurs repertoires 

app.use(express.static("medias"));

//pr que les fichier soit charger avec leur prefixe
app.use("/media",express.static("public"));