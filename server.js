var express=require('express');
var app=express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/public/index.html');
});
app.use('/static',express.static('public'));

console.log('server is running at port 127.0.0.1:8888')
app.listen(8888);