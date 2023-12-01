/*const app=require('./app')

var x=10;
let y=3;

console.log(app.z());
 const arr = [2,3,5,6,7,8,9,9,9];
 let result=arr.filter((check)=>{
   return check===4;

 })
 console.log(result);

 /////////////////////////core module like buffer filesystem(Fs) and HTTP//////////
 const fs=require('fs');
 fs.writeFileSync("sid.txt","Siddique");


 ///////////////////local Server ///////////////////////////
 const http=require('http');///yh call ho rha hai core module
 http.createServer((req,resp)=>{
    resp.write("<h1>SID</h1>");
    resp.end();
 })///////listen(4200) ky andr flhal tk tw apga webpage ka address jata hai


 ///////////////////////////////package.json file //////////
 const colors=require('colors');
 console.log("hello".blue);
 //////////////NPDEmoN/// time saving hau isko terminal call krty haui i.e nodemon ./index.js
 const data=[
  {name:'Siddique',email:'ranasiddique06@gmail.com'},
  {name:'Aqeel',email:'ranasiddique06@gmail.com'}
 ]
module.exports=data;
/////////////////////////////////////////ARGV Function//////////////////////////////
const fs = require('fs');
const input = process.argv;
if(input[2]=='add')
{
  fs.writeFileSync(input[3],input[4]);
  console.log('successfully added')
}else if(input[2]== 'remove'){
  fs.unlinkSync(input[3]);
  console.log('successfully removed')
}else{
  console.log('INVALID OUTPUT');
}
///////////How to create multiple file in folder and list of files/////////////////
const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'files');
console.log(dirpath);
for(i=0;i<5;i++)
{
  fs.writeFileSync(dirpath+"/data"+i+".txt",'This file is ahm ahm');
}
fs.readdir(dirpath,(err,files)=>{
  files.forEach((item)=>{
    console.log('File name is ',item)
  })

})*/
////////////////CRUD(Create, read , Update , delete ) Files////////////////////////
/*const { rejects } = require('assert');
const fs = require('fs');
const path = require('path');
const { promises } = require('stream');
const drpath = path.join(__dirname,'curd');

const filepath = `${drpath}/data.txt`;
console.log(filepath);
//fs.writeFileSync(filepath,'This is data file ');
//fs.readFile(filepath,'utf8',(err,item)=>{
  //console.log(item);
//})
//fs.appendFile(filepath,' and this file is in curs folder. ',(err)=>{
  //if(!err) console.log("file is updated");
//})
//fs.rename(filepath,`${drpath}/DATA.txt`,(err)=>{
  //if(!err) console.log("File is updated");
//})
//fs.unlinkSync(`${dirpath}/DATA.txt`);
///////////////////////////////PROMISES+++++++++++++++++++++++++++++++++++++++++
let a=10;
let b=0;
setTimeout(()=>{
  b=30;
},2000)
const waitingdData = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(30);
  },2000)
})
waitingdData.then((data)=>{
  b=data;
  console.log(a+b);

})
//////////////////Express.JS++++++++++++++++++++
const express = require('express');
const app = express();
app.get('',(req,res)=>{
  console.log(req.query);
  res.send('This is home page .'+req.query.name);
})
app.get('/about',(req,res)=>{
  res.send("This is about page.");
})
app.listen(4200);*/
/////////////How to render html file into nodejs////////////////
/*const express = require('express');
const path = require('path');
const app = express();
const folderdr = path.join(__dirname, 'Html');
console.log(folderdr);
//app.use(express.static(folderdr));
app.get('', (req, resp) => {
  resp.sendFile(`${folderdr}/index.html`);
})

app.get('/about', (req, resp) => {
  resp.sendFile(`${folderdr}/about.html`);

})
app.get('*',(req,resp)=>{
  resp.sendFile(`${folderdr}/404.html`);
})




app.listen(4200);*/
/////////////////Middleware////////////////
/*const express = require('express');
const app = express();

const reqFilter = (req,resp,next)=>{
    if(req.query.age>18)
    {
      next();
    }
    else if(req.query.age<18)
    {
      resp.send("you cannot access to this page")
    }
    else
    {
      resp.send("please send date ")
    }
}
//app.use(reqFilter)

 app.get('/',reqFilter,(req,resp)=>{
    resp.send("Welcome to home page")

 })
 app.get('/users',(req,resp)=>{
  resp.send("Welcome to users page")
  
})
app.listen(4200);*/
/////////////////Mongodb//////////////
// const dbConnect = require('./Monogodb');


// main = async()=>{
//   let data = await dbConnect();
//   data = await data.find().toArray();
//   console.log(data);
// }
// main();

const os = require('os');

console.log(os.freemem()/(1024*1024*1024))
console.log(os.totalmem()/(1024*1024*1024))








