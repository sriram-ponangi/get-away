const Joi = require('joi');

const createDestinationValidator = (data) => {
    const destinationSchema = Joi.object({
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
        essentials: Joi.array()
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
        tourist_attractions: Joi.array()
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
    return destinationSchema.validate(data);
}


module.exports = createDestinationValidator;