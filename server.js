var express=require('express');
var app=express();
const port=process.env.PORT||8888;
app.get('/',(req,res)=>{
    res.sendFile(__dirname +'/public/index.html');
});
app.use('/static',express.static('public'));

console.log(`server is running at port ${port}`)
app.listen(port);
