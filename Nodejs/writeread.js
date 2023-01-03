const http = require('http');
const fs = require('fs')
const port = 4000;

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/'){
        res.write('<html>')
        res.write('<head><title> Enter message </title></head>')
        res.write('<body><form action="/message" method = "POST"><input type="text" name="Message"><button type="submit"> Send </button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if (url === '/message' && method=== 'POST'){
        fs.writeFileSync('message.text', 'DUMMY')
        res.statusCode = 302
        res.setHeader('Location', '/')
        return(res.end)
    }
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