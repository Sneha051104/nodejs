const s=require('http')
// console.log(s)

s.createServer((req,res)=>{
    res.write('Hello Node mern')
    res.end()
}).listen(4000,console.log("Server is running"))
