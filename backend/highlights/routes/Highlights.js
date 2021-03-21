const router = require('express').Router();
const verifyTokenMiddleware = require('../../utils/VerifyToken');
const verifyAdminTokenMiddleware = require('../../utils/VerifyAdminToken');
const Highlights = require('../models/Highlights');
const Destinations = require('../../destinations/models/Destinations');

const createHighlightValidator = require('../validations/CreateHighlight');

router.post('/', verifyAdminTokenMiddleware, async (req, res) => {
    req.body.category = req.body.category.toLowerCase()
    let validationObject = Object.assign({}, req.body);
    delete validationObject.currentUser;
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

router.get('/locations', /*verifyTokenMiddleware*/ async (req, res) => {
    const destinationId = req.query.destinationId
    const category = req.query.category.toLowerCase()
    try {
        const locations = await Highlights.findOne({ destinationId: destinationId, category: category });
        return res.send(locations);
    }
    catch (error) {
        console.log(error);
        return res.status(500)
            .send({
                errors: error
            });
    }
});

router.get('/highlights', /*verifyTokenMiddleware*/ async (req, res) => {
    const destinationId = req.query.destinationId
    try {
        const data = await Highlights.find({ destinationId: destinationId});
        return res.send(data);
    }
    catch (error) {
        console.log(error);
        return res.status(500)
            .send({
                errors: error
            });
    }
});


module.exports = router;