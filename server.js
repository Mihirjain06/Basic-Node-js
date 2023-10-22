const http = require("node:http");
const fs  = require("node:fs");

const server = http.createServer((req, res)=>{
    /*const SuperHero = {
        firstname : "Mihir",
        lastname : "Jain",
     };

    // res.writeHead(200, {"Content-Type": "application/json"}); //http server code for successfully 200
    // res.end(JSON.stringify(SuperHero));
    
    const name ="Mihir Jain";
    res.writeHead(200, {"Content-Type": "text/html"}); //http server code for successfully 200
    let html =fs.readFileSync("./server.html","utf-8");
    html = html.replace("{{name}}",name);
    // fs.createReadStream(__dirname + "./server.html").pipe(res); //second method to pass  html res. using pipe
    res.end(html); */
    
    //Http Rountine
    if(req.url === "/"){
        res.writeHead(200,{"Content-Type": "text/plain" });
    }else if (req.url === "/about"){
        res.writeHead(200,{"Content-Type": "text/plain" });
        res.end("About page"); 
    }else if (req.url === "/api"){
        res.writeHead(200,{"Content-Type": "application/json" });
        res.end(JSON.stringify({
            firstname : "Mihir",
            lastname : "Jain",
        })); 
    }else {
        res.writeHead(404);
        res.end("Page Not Found")
    }
});

server.listen(3000,()=>{
    console.log("Server running on port 3000");
}); 