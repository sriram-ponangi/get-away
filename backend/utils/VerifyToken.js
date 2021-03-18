/*
* Authors: 
    - Sriram, Ponangi
*/
const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(403).send('Access Denied!');
    }
    const token = authHeader.split(' ')[1];
    try{
        const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
        req.body.currentUser = verifiedUser;
        next();
    }catch (error){
        return res.status(403).send('Access Denied!');
    }
    
}