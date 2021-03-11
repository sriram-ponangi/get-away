const Joi = require('joi');

const createHighlightValidator = (data) => {
    const highlightsSchema = Joi.object({
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

        destinationId: Joi.string()
            .max(100)
            .min(24)
            .required(),

        about: Joi.array()
            .items({
                title: Joi.string()
                    .required()
                    .max(100),
                paragraphs: Joi.array()
                    .items(
                        Joi.string()
                            .required()
                    ),
            })
            .required(),
    });
    return highlightsSchema.validate(data);
}


module.exports = createHighlightValidator;