const http = require('http');
const port = 4000;

const server = http.createServer((req, res) => {
    res.write('Batman')
    res.end()
    
})

server.listen(port, function(error){
    if (error){
        console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port ' + port)
    }
})