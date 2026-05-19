const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const serrver = http.createServer((req,res)=>
{
     res.writeHead(200,{"Content-Type":"text/plain"});
     res.end("Hello world");
})

serrver.listen(port,hostname,()=>
{
     console.log(`le server tourne sur l'adresse http://${hostname}:${port}/`);
})