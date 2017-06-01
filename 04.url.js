const url =require('url');
const querystring =require('querystring');

const myurl = 'http://127.0.0.1:8080/a/b/c?name=xiaoqiang&age=12';

const query = url.parse(myurl).query;
 
 //传入的格式转化为字符串
 const obj =querystring.parse(query)
 console.log(obj);