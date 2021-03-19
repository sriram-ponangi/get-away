/*
* Authors: 
    - Rajni, Puni  
*/
const Joi = require('joi');

const createCommentsValidator = (data) => {
    const groupCommentsSchema = Joi.object({
        groupId: Joi.string()
            .max(100)
            .min(24)
            .required(),

        text: Joi.string()
            .max(1024)
            .required()
    });
    return groupCommentsSchema.validate(data);
}


module.exports = createCommentsValidator;