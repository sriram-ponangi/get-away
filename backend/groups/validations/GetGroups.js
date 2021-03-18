/*
* Authors: 
    - Sriram, Ponangi
*/
const Joi = require('joi');

const getGroupsValidator = (data) => {
    const groupSchema = Joi.object({  
        
        highlightId: Joi.string()
            .max(100)
            .min(24)
            .required()
    });
    return groupSchema.validate(data);
}


module.exports = getGroupsValidator;