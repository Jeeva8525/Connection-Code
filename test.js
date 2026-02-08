const http = require('http')
const server = http.createServer((req,res) => {
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    })

    res.end('<h1>Good Welcome</h1>')
})

server.listen(3000, () => { console.log('<h1>Server has started</h1>' )})