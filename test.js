const http=require('http')
http.createServer(function(reg,res){
    res.end("hello from my server")
}).listen(1000)

console.log("start server")