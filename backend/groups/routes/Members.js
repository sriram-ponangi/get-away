/*
* Authors: 
    - Sriram, Ponangi
*/
const router = require('express').Router();
const verifyTokenMiddleware = require('../../utils/VerifyToken');
const verifyAdminTokenMiddleware = require('../../utils/VerifyAdminToken');

const Groups = require('../models/Groups');
const Users = require('../../users/models/Users');

const groupMembersValidator = require('../validations/Members');
const groupDetailsPerMember = require('../validations/GetGroupDetailsPerMember');
const leaveGroupMember = require('../validations/LeaveGroupByMember');

router.post('/', verifyTokenMiddleware, async(req, res) => {

    let validationObject = Object.assign({}, req.body);
    delete validationObject.currentUser;
    const { error } = groupMembersValidator(validationObject);
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
        console.log("Success-2", group);
        if (group && user) {
            const savedGroup = await Groups.findOneAndUpdate(validationObject, {
                $addToSet: {
                    members: {
                        $each: [user]
                    }
                }
            }, { new: true });

            const savedUser = await Users.findOneAndUpdate(userFilter, {
                $addToSet: {
                    groups: {
                        $each: [group]
                    }
                }
            }, { new: true });
            return res.send({ group: savedGroup, user: savedUser });
        } else {
            return res.status(500)
                .send({
                    errors: {
                        messages: ['Invalid Group']
                    }
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

router.get('/', async(req, res) => {

    let groupValidationObject = {
        _id: req.query.group_id,
    }
    const { error } = groupDetailsPerMember(groupValidationObject);
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
                'name description imageSource')
            .populate({ path: 'members', select: ['email', 'firstName', 'lastName'] });
        return res.status(200).send(group);
    } catch (error) {
        console.log(error);
        return res.status(500)
            .send({
                errors: error
            });
    }
});

router.delete('/', verifyTokenMiddleware, async(req, res) => {

    let validationObject = Object.assign({}, req.body);
    delete validationObject.currentUser;
    const { error } = leaveGroupMember(validationObject);
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
            const savedGroup = await Groups.findOneAndUpdate(validationObject, {
                $pull: { members: user._id }
            }, { new: true });

            const savedUser = await Users.findOneAndUpdate(userFilter, {
                $pull: { groups: group._id }
            }, { new: true });
            return res.send({ group: savedGroup, user: savedUser });
        } else {
            return res.status(500)
                .send({
                    errors: {
                        messages: ['Invalid Group']
                    }
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