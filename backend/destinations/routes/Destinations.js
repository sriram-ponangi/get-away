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




router.get('/', verifyTokenMiddleware, async (req, res) => {

    let destinationValidationObject = {
        location_country: req.query.location_country,
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
            location_country: {
                $regex: req.query.location_country,
                $options: 'i'
            }
        }, 'name description image_src location_name');
        return res.status(200).send(destinations);
    } catch (error) {
        console.log(error);
        return res.status(500)
            .send({
                errors: error
            });
    }
});


router.get('/details', verifyTokenMiddleware, async (req, res) => {

    let destinationValidationObject = {
        location_country: req.query.location_country,
        location_name: req.query.location_name,
        name: req.query.name,
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
        const destinationDetials = await Destinations.findOne(destinationValidationObject);
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