/*
* Authors: 
    - Sriram, Ponangi
*/
const Joi = require('joi');


const forgotPasswordValidator = (data) => {
    const userSchema = Joi.object({
        email: Joi.string()
            .max(100)
            .required()
            .email()        
    });
    return userSchema.validate(data);
}


module.exports = forgotPasswordValidator;