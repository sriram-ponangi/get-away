/*
* Authors: 
    - Sriram, Ponangi
*/
const Joi = require('joi');

const groupMembersValidator = (data) => {
    const groupSchema = Joi.object({
        _id: Joi.string()
            .max(100)
            .min(24)
            .required()

    });
    return groupSchema.validate(data);
}


module.exports = groupMembersValidator;