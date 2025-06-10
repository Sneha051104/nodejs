const f = require('fs')
//console.log(f)

//async
// f.readFile(__dirname+"/student.txt","utf8",(err,data)=>{ //it will we print latter and if utf8 is removed then it will print numbers not strimg
//     if(err) throw(err);
//     console.log(data);
// });
// console.log("hello gwalior") //it will be print first

//sync
try{const data=f.readFileSyn(__dirname+"/student.txt","utf8");
console.log(data);}
catch(err){
    console.log(err)
}
console.log("hello gwalior")