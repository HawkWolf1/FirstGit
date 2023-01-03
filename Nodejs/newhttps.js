const http = require('http');
const port = 4000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title> My First Page </title></head>')
    res.write('<body><h1> Hello from my nodejs server! </h1></body>')
    res.write('</html>')
    res.end()
})

server.listen(port, function(error){
    if (error){
        console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port ' + port)
    }
})