const router = require('express').Router();
const verifyTokenMiddleware = require('../../utils/VerifyToken');
const verifyAdminTokenMiddleware = require('../../utils/VerifyAdminToken');
const Highlights = require('../models/Highlights');
const Destinations = require('../../destinations/models/Destinations');

const createHighlightValidator = require('../validations/CreateHighlight');

router.post('/', verifyAdminTokenMiddleware, async (req, res) => {
    let validationObject = Object.assign({}, req.body);
    delete validationObject.currentUser;
    const { error } = createHighlightValidator(validationObject);
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
        const destinationDetials = await Destinations.findOne({ _id: validationObject.destinationId });
        validationObject.destinationId = destinationDetials;
        // console.log(validationObject.destinationId);
        const highlightsModel = new Highlights(validationObject);

        try {
            const savedHighlight = await highlightsModel.save();
            return res.send(savedHighlight);
        } catch (error) {
            return res.status(400)
                .send({
                    errors: error
                });
        }

    } catch (error) {
        console.log(error);
        return res.status(500)
            .send({
                errors: error
            });
    }
});


module.exports = router;