const http = require('http');
const port = 4000;

const server = http.createServer((req, res) => {
    if (req.url== '/home'){
        res.write('Welcome Home')
        res.end()
    }else if (req.url== '/about'){
        res.write('Welcome to about us page')
        res.end()
    }else if (req.url== '/node'){
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