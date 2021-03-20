const Joi = require('joi');

const createHighlightValidator = (data) => {
    const location = Joi.object({

        title: Joi.string()
            .max(100)
            .required(),

        text: Joi.string()
            .max(1024)
            .required()
            .allow(''),

        desc: Joi.string()
            .max(5000)
            .min(24)
            .required(),

        imScrc: Joi.string()
            .max(1024)
            .min(24)
            .required(),
    });

    const highlightsSchema = Joi.object({
        category: Joi.string()
            .max(100)
            .required(),

        destinationId: Joi.string()
            .max(100)
            .min(24)
            .required(),

        locations: Joi.array()
            .items({
                location
            })
            .required(),

    })
    return highlightsSchema.validate(data);
}



module.exports = createHighlightValidator;