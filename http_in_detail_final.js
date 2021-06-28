//console.log('Express Tutorial')
const http = require('http');
const {readFileSync} = require('fs');
const home = readFileSync('./navbar-app/index.html')
const home_logo = readFileSync('./navbar-app/logo.svg')
const home_styles = readFileSync('./navbar-app/styles.css')
const home_logic = readFileSync('./navbar-app/browser-app.js')
const server = http.createServer((req,res)=>{
    const url = req.url;
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.write(home);
        res.end();

    }
    else if(req.url === '/about'){
        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.write(`<h1>This is about page</h1>`);
        res.end();
        
    }
    //style
    else if(req.url === '/styles.css'){
        res.writeHead(200,{'Content-Type' : 'text/css'});
        res.write(home_styles);
        res.end();
        
    }
    //logo
    else if(req.url === '/logo.svg'){
        res.writeHead(200,{'Content-Type' : 'image/svg + xml'});
        res.write(home_logo);
        res.end();
        
    }
    //logic
    else if(req.url === '/browser-app.js'){
        res.writeHead(200,{'Content-Type' : 'text/javascript'});
        res.write(home_logic);
        res.end();
        
    }
    else{
        res.writeHead(404,{'Content-Type' : 'text/html'});
        res.write(`<h1>Page Not Found</h1>`);
        res.end();
    }
    
    
}).listen(3000);