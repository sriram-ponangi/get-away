/*
* Authors: 
    - Sriram, Ponangi
*/
const router = require('express').Router();
const verifyTokenMiddleware = require('../../utils/VerifyToken');
const verifyAdminTokenMiddleware = require('../../utils/VerifyAdminToken');
const createDestinationValidator = require('../validations/CreateDestination');
const listDestinationValidator = require('../validations/ListDestinations');
const getDestinationDetialsValidator = require('../validations/GetDestinationDetails');
const Destinations = require('../models/Destinations');

router.post('/', verifyAdminTokenMiddleware, async (req, res) => {

    let validationObject = Object.assign({}, req.body);
    delete validationObject.currentUser;
    const { error } = createDestinationValidator(validationObject);
    if (error) {
        console.log(error.details);
        return res.status(400)
            .send({
                errors: {
                    messages: error.details.map(e => e.message)
                }
            });
    }

    const destinationModel = new Destinations(validationObject);
    try {
        const savedDestination = await destinationModel.save();
        return res.send(savedDestination);
    } catch (error) {
        return res.status(400)
            .send({
                errors: error
            });
    }

});




router.get('/', async (req, res) => {

    let destinationValidationObject = {
        countryName: req.query.countryName,
    }

    const { error } = listDestinationValidator(destinationValidationObject);
    if (error) {
        console.log(error.details);
        return res.status(400)
            .send({
                errors: {
                    messages: error.details.map(e => e.message)
                }
            });
    }

    try {
        const destinations = await Destinations.find({
            countryName: {
                $regex: req.query.countryName,
                $options: 'i'
            }
        }, 'name description imageSource locationName');
        return res.status(200).send(destinations);
    } catch (error) {
        console.log(error);
        return res.status(500)
            .send({
                errors: error
            });
    }
});


router.get('/details', async (req, res) => {

    let destinationValidationObject = {
        // countryName: req.query.countryName,
        // locationName: req.query.locationName,
        // name: req.query.name,
        destinationId: req.query.destinationId
    }

    const { error } = getDestinationDetialsValidator(destinationValidationObject);
    if (error) {
        console.log(error.details);
        return res.status(400)
            .send({
                errors: {
                    messages: error.details.map(e => e.message)
                }
            });
    }

    try {
        const destinationDetials = await Destinations.findOne({_id: destinationValidationObject.destinationId});
        return res.status(200).send(destinationDetials);
    } catch (error) {
        console.log(error);
        return res.status(500)
            .send({
                errors: error
            });
    }
});

module.exports = router;