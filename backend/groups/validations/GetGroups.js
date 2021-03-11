const Joi = require('joi');

const getGroupsValidator = (data) => {
    const groupSchema = Joi.object({  

        location_country: Joi.string()
            .max(100)
            .required(),

        location_name: Joi.string()
            .max(100)
            .required(),

        highlight: Joi.string()
            .max(100)
            .required()
    });
    return groupSchema.validate(data);
}


module.exports = getGroupsValidator;