/*
* Authors: 
    - Sriram, Ponangi
*/
const Joi = require('joi');

const listDestinationValidator = (data) => {
    const destinationSchema = Joi.object({

        countryName: Joi.string()
            .max(100)
            .required()
    });
    return destinationSchema.validate(data);
}


module.exports = listDestinationValidator;