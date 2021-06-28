const express = require('express');
const logger = require('./logger');
const app = express();
//const logger = require('./logger')
//const authorize = require('./authorize');
const morgan = require('morgan');
app.use(morgan('tiny'))
app.use(logger);
const authorize = (req,res,next)=>{
    const {user} = req.query ;
    if(user === 'Reshma'){
        req.user = {name:'Reshma',id:3};
        next();
    }
    else{
        res.status(401).send('Unauthorized Person');
        
    }
   
}
/*const logger = (req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
   // res.send('hi');
    next();
};*/
//app.use([logger,authorize]);
app.get('/',(req,res)=>{
   
    res.send('this is my homepage');
})
app.get('/about',(req,res)=>{
    res.send('this is my about page');
})
app.get('/api/items',(req,res)=>{
   
    res.send('this is my items page');
})
app.get('/api/products/query',(req,res)=>{
    console.log(req.user);
    res.send('this is my products page');
})
app.listen(5000,()=>{
    console.log('hello world');
})