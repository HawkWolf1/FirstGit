const http = require('http');
const port = 4000;

const server = http.createServer((req, res) => {
    console.log('Avinash Singh')
})

server.listen(port, function(error){
    if (error){
        console.log('Something went wrong', error)
    }else{
        console.log('Server is listening on port' + port)
    }
})