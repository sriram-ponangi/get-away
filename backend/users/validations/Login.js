/*
* Authors: 
    - Sriram, Ponangi
*/
const Joi = require('joi');


const loginValidator = (data) => {
    const userSchema = Joi.object({
        email: Joi.string()
            .max(100)
            .required()
            .email(),

        password: Joi.string()
            .min(6)
            .max(1024)
            .required()
    });
    return userSchema.validate(data);
}


module.exports = loginValidator;