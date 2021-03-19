/*
* Authors: 
    - Rajni, Puni  
*/
const Joi = require('joi');

const getCommentsValidator = (data) => {
    const groupCommentsSchema = Joi.object({
        groupId: Joi.string()
            .max(100)
            .min(24)
            .required()
    });
    return groupCommentsSchema.validate(data);
}


module.exports = getCommentsValidator;