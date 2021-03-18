/*
* Authors: 
    - Sriram, Ponangi
*/
const Joi = require('joi');

const createGroupValidator = (data) => {
    const groupSchema = Joi.object({
        name: Joi.string()
            .max(100)
            .required(),

        description: Joi.string()
            .max(1024)
            .required(),

        imageSource: Joi.string()
            .max(1024)
            .required()
            .allow(''),        

        highlightId: Joi.string()
            .max(100)
            .min(24)
            .required()
    });
    return groupSchema.validate(data);
}


module.exports = createGroupValidator;