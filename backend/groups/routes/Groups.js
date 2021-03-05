const router = require('express').Router();
const verifyTokenMiddleware = require('../../utils/VerifyToken');
const verifyAdminTokenMiddleware = require('../../utils/VerifyAdminToken');
const Groups = require('../models/Groups');
const createGroupValidator = require('../validations/CreateGroup');
const defaultGroupValidator = require('../validations/DefaultGroup');
const Users = require('../../users/models/Users');

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

    const group = new Groups({
        name: req.body.name,
        description: req.body.description,
        location_country: req.body.location_country,
        location_name: req.body.location_name,
        highlight: req.body.highlight
    });

    try {
        const savedUser = await group.save();
        return res.send(savedUser);
    } catch (error) {
        return res.status(400)
            .send({
                errors: error
            });
    }

});

router.post('/member', verifyTokenMiddleware, async (req, res) => {

    let validationObject = Object.assign({}, req.body);
    delete validationObject.currentUser;
    const { error } = defaultGroupValidator(validationObject);
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
        const userFilter = { email: req.body.currentUser.email };

        const user = await Users.findOne(userFilter);
        const group = await Groups.findOne(validationObject);
        if (group && user) {
            const savedGroup = await Groups.findOneAndUpdate(validationObject,
                {
                    $addToSet: {
                        members: {
                            $each: [user]
                        }
                    }
                },
                { new: true });

            const savedUser = await Users.findOneAndUpdate(userFilter,
                {
                    $addToSet: {
                        groups: {
                            $each: [group]
                        }
                    }
                },
                { new: true });
            return res.send({ group: savedGroup, user: savedUser });
        }



    } catch (error) {
        console.log(error);
        return res.status(500)
            .send({
                errors: error
            });
    }

});

router.get('/members', verifyTokenMiddleware, async (req, res) => {

    let groupValidationObject = {
        name: req.query.name,
        location_country: req.query.location_country,
        location_name: req.query.location_name,
        highlight: req.query.highlight,
    }    
    const { error } = defaultGroupValidator(groupValidationObject);
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
        const group = await Groups.findOne(groupValidationObject,
             'name description location_country location_name highlight')
             .populate({ path: 'members', select: ['email','firstName','lastName'] });
        return res.status(200).send(group);
    } catch (error) {
        console.log(error);
        return res.status(500)
            .send({
                errors: error
            });
    }
});

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