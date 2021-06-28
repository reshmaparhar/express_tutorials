const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.get('/about',(req,res)=>{
    res.send('This is my about page');
})
app.all('*',(req,res)=>{
    res.status(404).send('File not found');
})
app.listen(4500,()=>{
    console.log('server is listening on port 5000');
});
//app.use();