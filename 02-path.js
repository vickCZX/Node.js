const path =require('path');

const mypath = 'c:/123/1.txt';

//获取文件名字
// const filename =path.basename(mypath);

// console.log(filename)
//获取当前文件所在的路径名字 __dirname
// const dirname = path.dirname(mypath);
// console.log(dirname)


//获取
const extname = path.extname(mypath);
console.log(extname)