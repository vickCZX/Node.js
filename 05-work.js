const url = require('url');
const fs =require('fs');
const http =require('http');
const path =require('path');


const server = http.createServer(function(req,res){
if (req.url =='/favicon.ico'){
  return
}

  const pathname =url.parse(req.url).pathname;

  const extname =path.extname(pathname);
  
  getMime(extname,function(mine){

    fs.readFile(path.join(__dirname,'demo',pathname),function(err,data){
      if(!err){
        res.writeHead(200,{'Content-type':`${mine};charset=utf-8`})
        res.end(data)
      }else{
        res.end('404')
      }
      
    })
  })
})

function getMime(extname,callback){
  fs.readFile(path.join(__dirname,'mime.json'),function(err,data){
   if(!err){
     const jsonObj =JSON.parse(data.toString());
     const ext =jsonObj[extname]
     callback(ext);
   }
  })

}



server.listen(80)
