const http = require('http');
const port = 4000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    if (req.url=== '/home'){
        res.write('Welcome Home')
    }else if ('localhost:4000/about'){
        res.write('Welcome to about us page')
    }else if ('localhost:4000/node'){
        res.write('Welcome to my nodeJs project')
    res.end()
    }
})

server.listen(port, function(error){
    if (error){
        console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port ' + port)
    }
})