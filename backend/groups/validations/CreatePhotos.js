/*
* Authors: 
    - Rajni, Puni  
*/
const Joi = require('joi');

const createPhotosValidator = (data) => {
    const groupPhotosSchema = Joi.object({
        groupId: Joi.string()
            .max(100)
            .min(24)
            .required()
    });
    return groupPhotosSchema.validate(data);
}

module.exports = createPhotosValidator;