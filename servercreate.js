const h=require('http')
// console.log(h)
h.createServer((req,res)=>{
    res.write("Welcome Indore")
    res.end()
}).listen(3000,console.log("server start local host:3000"))  //listen is used to start the server basically server chalana