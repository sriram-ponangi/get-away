/*
* Authors: 
    - Sriram, Ponangi
*/
const Joi = require('joi');

const getDestinationValidator = (data) => {
    const destinationSchema = Joi.object({

        // countryName: Joi.string()
        //     .max(100)
        //     .required(),

        // locationName: Joi.string()
        //     .max(100)
        //     .required(),

        // name: Joi.string()
        //     .max(100)
        //     .required(),

        destinationId: Joi.string()
            .max(100)
            .min(24)
            .required()

    });
    return destinationSchema.validate(data);
}


module.exports = getDestinationValidator;