const express = require('express');
const {products} = require('./data');
const app = express();
app.listen(5000, ()=>{
    console.log("listening on port 5000");
})
/*app.get('/', (req,res)=>{
    res.json(products)
})*/
app.get('/',(req,res)=>{
    res.send(`<h1>Home page</h1><a href = "/api/products" >products</a>`);
})
app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product;
         return({id,name,image})
    })
    res.json(newProducts);
})
app.get('/api/products/:productId',(req,res)=>{
    
    const {productId} = req.params;
    const SingleProduct = products.find((product)=> product.id === Number(productId));
    console.log(SingleProduct);
    if(!SingleProduct){
        res.status(400).send('Product does not exits ');
    }
    res.json(SingleProduct);
})
app.get('/api/Products/:productId/reviews/:review_id', (req,res)=>{
    res.send('hello world');
})
app.get('/api/v1/query', (req,res)=>{
    console.log(req.query);
    let {search,limit}= req.query;
    let sortedProducts = [...products];
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    if(sortedProducts.length < 1){
        return res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(sortedProducts);
    res.send('hello world');
})