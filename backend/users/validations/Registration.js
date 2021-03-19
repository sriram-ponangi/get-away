/*
* Authors: 
    - Sriram, Ponangi
*/
const Joi = require('joi');

const registrationValidator = (data) => {
    const userSchema = Joi.object({
        firstName: Joi.string()
            .max(100)
            .required(),

        lastName: Joi.string()
            .max(100)
            .required(),

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


module.exports = registrationValidator;