/*
* Authors: 
    - Sriram, Ponangi
*/
const Joi = require('joi');

const updateProfileValidator = (data) => {
    const userSchema = Joi.object({
        firstName: Joi.string()
            .max(100)
            .required(),

        lastName: Joi.string()
            .max(100)
            .required(),


        password: Joi.string()
            .min(6)
            .max(1024)
            .allow(''),

        confirmPassword: Joi.string()
        .min(6)
        .max(1024)
        .allow('')
    });
    return userSchema.validate(data);
}


module.exports = updateProfileValidator;