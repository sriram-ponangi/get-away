/*
* Authors: 
    - Sriram, Ponangi
*/
const Joi = require('joi');

const createDestinationValidator = (data) => {
    const destinationSchema = Joi.object({
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

        countryName: Joi.string()
            .max(100)
            .required(),

        locationName: Joi.string()
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

        touristAttractions: Joi.array()
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