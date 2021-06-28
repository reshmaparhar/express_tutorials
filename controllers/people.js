const {people} = require('../data');
const getPeople = (req,res,next)=>{
    res.status(200).json({success:true, data:people});
    next();
}
const CreatePersonPostman =(req,res,next)=>{
    const {name} = req.body;
    if(!name){
        res.status(401).json({success:false, msg : "Please Provide details"});
        next();
    }
    res.status(200).json({success:true,data :[...people,name]})
}
const CreatePerson = (req,res,next)=>{
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
    next();
}
const UpdatePerson = (req,res,next)=>{
    const {id} = req.params;
    const {name} = req.body;
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
    next();

}
const deleteperson = (req,res,next)=>{
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
    res.status(200).json({success:true,data:newPerson});
    next();
    
}
module.exports = {
    getPeople,
    CreatePerson,
    CreatePersonPostman,
    UpdatePerson,
    deleteperson
}