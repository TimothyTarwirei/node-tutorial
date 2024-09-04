const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end('Welcome to my Home Page')
  }
  if(req.url === '/about'){
    res.end('Here is our short history')
  }
  res.end(`<h1>Ooops!</h1>
    <p>We cant seem to find the page you ARE LOOKING FOR</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000);
