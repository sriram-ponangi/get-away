const Joi = require('joi');

const createGroupValidator = (data) => {
    const groupSchema = Joi.object({
        name: Joi.string()
            .max(100)
            .required(),

        description: Joi.string()
            .max(1024)
            .required(),

        image_src: Joi.string()
            .max(1024)
            .required()
            .allow(''),

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


module.exports = createGroupValidator;