const router = require('express').Router();

const verifyTokenMiddleware = require('../../utils/VerifyToken');
const verifyAdminTokenMiddleware = require('../../utils/VerifyAdminToken');

const Groups = require('../models/Groups');
const Highlights = require('../../highlights/models/Highlights');

const createGroupValidator = require('../validations/CreateGroup');

const getGroupsValidator = require('../validations/GetGroups');

const groupMemberRoutes = require('./Members');
const groupCommentRoutes = require('./Comments');

router.post('/', verifyAdminTokenMiddleware, async (req, res) => {

    let validationObject = Object.assign({}, req.body);
    delete validationObject.currentUser;
    const { error } = createGroupValidator(validationObject);
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
        const highlightDetials = await Highlights.findOne({ _id: validationObject.highlightId });
        validationObject.highlightId = highlightDetials;
        console.log(validationObject.highlightId);
        const groupsModel = new Groups(validationObject);

        try {
            const savedGroup = await groupsModel.save();
            return res.send(savedGroup);
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

router.get('/', verifyTokenMiddleware, async (req, res) => {

    let groupValidationObject = {        
        highlightId: req.query.highlightId,
    }
    const { error } = getGroupsValidator(groupValidationObject);

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
        const groups = await Groups.find(groupValidationObject, 'name description');
        return res.status(200).send(groups);
    } catch (error) {
        console.log(error);
        return res.status(500)
            .send({
                errors: error
            });
    }
});

router.use('/member', groupMemberRoutes);
router.use('/comment', groupCommentRoutes);


// To-DO:
// Add Comments
// Get Comments

// Add Images
// Get Images




/*
router.get('/user/all', verifyTokenMiddleware, (req, res) => {
    res.json({
        reqBody: req.body,
        groups: [
            {
                name: "One",
                country: "India"
            },
            {
                name: "Two",
                country: "Canada"
            },
        ]
    })
});
*/
module.exports = router;