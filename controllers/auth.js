function auth(req,res,next){
    console.log(req.body);
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name} `);
        next();
    }
   
    res.status(401).send('Plese provide credentials');
}
module.exports = auth;