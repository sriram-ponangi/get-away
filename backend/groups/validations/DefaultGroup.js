const Joi = require('joi');

const defaultGroupValidator = (data) => {
    const groupSchema = Joi.object({
        name: Joi.string()
            .max(100)
            .required(),

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


module.exports = defaultGroupValidator;