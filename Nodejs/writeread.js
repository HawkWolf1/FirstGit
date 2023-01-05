const http = require('http');
const fs = require('fs')
const port = 4000;

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/'){
        const filePath = path.join(__dirname, "message.txt")
        fs.readFile(filePath, {encoding: 'utf-8'}, (err,data) => {
            if (err) {
                console.log(err)
            }
        
        res.write('<html>')
        res.write('<head><title> Enter message </title></head>')
        res.write('<body><form action="/message" method = "POST"><input type="text" name="Message"><button type="submit"> Send </button></form></body>')
        res.write('</html>')
        return res.end()
            
    })
    if (url === '/message' && method=== 'POST'){
        const body=[]
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end', ()=>{
            const paresedBody = Buffer.concat(body).toString()
            const message = paresedBody.split('=')[1]
            fs.writeFileSync('message.txt', message, (err)=>{
                if (err){
                    console.log(err)
                }
                console.log(`indise fs.writeFile`)
                res.statusCode = 302
                res.setHeader('Location', '/')
                return(res.end)
            })
        })
        
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