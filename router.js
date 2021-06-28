const express = require('express');
const app = express();
const {people} = require('./data');
//static assets
//app.use(express.static('./methods-public'));
app.use(express.static('./methods-public'));
//parse form data
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.post('/login',(req,res)=>{
    console.log(req.body);
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name} `);
    }
   
    res.status(401).send('Plese provide credentials');
   
})
app.get('/api/people',(req,res)=>{
    //res.status(200).json(people);
    res.status(200).json({
        success:true,
        data:people
    })
});
app.post('/api/people',(req,res)=>{
    //res.status(200).json(people);
    res.status(200).send("success");
});
app.post('/api/people/postman',(req,res)=>{
    const {name} = req.body;
    if(!name){
        res.status(401).json({success:false, msg : "Please Provide details"});
    }
    res.status(200).json({success:true,data :[...people,name]});
})
app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params;
    
    const Person = people.find((person)=>{
        if(person.id === Number(id)){
            return person;
        }
       
    })
    if(!Person){
        res.status(404).json({success : false, msg :`person does not exists with id ${id}`});
    }
    const newPerson = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name;
           
        }
        return person
    })
    res.status(200).json({success:true,data:newPerson});

})
app.delete('/api/people/:id',(req,res)=>{
    const {id} = req.params;
    
    const persons = people.find((person)=>{
    if(person.id === Number(id)){
        return person;
    }});
    console.log(persons);
    if(!persons){
        return res.status(401).json({success:false,msg : `person with this id ${id} does not exist`});
    }
 const newPerson = people.filter((person)=>{
        if(person.id !== Number(id)){
            return person;
        }
    })
    return res.status(200).json({status:true,data:newPerson});
})

app.listen(5000,()=>{
    console.log('listening on server port 5000');
});