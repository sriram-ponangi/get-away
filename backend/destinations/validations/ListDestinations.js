const Joi = require('joi');

const getDestinationValidator = (data) => {
    const destinationSchema = Joi.object({

        location_country: Joi.string()
            .max(100)
            .required()
    });
    return destinationSchema.validate(data);
}


module.exports = getDestinationValidator;