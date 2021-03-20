/*
* Authors: 
    - Rajni, Puni
*/
const router = require('express').Router();
const verifyTokenMiddleware = require('../../utils/VerifyToken');
const verifyAdminTokenMiddleware = require('../../utils/VerifyAdminToken');

const Groups = require('../models/Groups');
const Users = require('../../users/models/Users');
const Comments = require('../models/Comments');

const createCommentsValidator = require('../validations/CreateComments');
const getCommentsValidator = require('../validations/GetComments');

router.post('/', verifyTokenMiddleware, async (req, res) => {

    let validationObject = Object.assign({}, req.body);
    delete validationObject.currentUser;
    const { error } = createCommentsValidator(validationObject);
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
        const user = await Users.findOne({ email: req.body.currentUser.email });
        const group = await Groups.findOne({ _id: validationObject.groupId });
        console.log(group); console.log(user);

        if (group && user) {
            const commentModel = new Comments({
                text: validationObject.text,
                userId: user
            });
            const savedComment = await commentModel.save();

            const savedGroup = await Groups.findOneAndUpdate({ _id: group._id },
                {
                    $addToSet: {
                        comments: {
                            $each: [savedComment]
                        }
                    }
                },
                { new: true });


            return res.send({ group: savedGroup, savedComment: savedComment });
        }
        else {
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

router.get('/', async (req, res) => {
    
    let groupValidationObject = {
        groupId: req.query.groupId
    }
    const { error } = getCommentsValidator(groupValidationObject);
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
        const group = await Groups.findOne({ _id: groupValidationObject.groupId }, 'name')
            .populate({
                path: 'comments',
                populate: {
                    path: 'userId',
                    model: 'users',
                    select: ['email', 'firstName', 'lastName']
                },
                options:{ sort:{"createdDate" : "descending"}}
            });
            console.log(group)
        return res.status(200).send(group);
    } catch (error) {
        console.log(error);
        return res.status(500)
            .send({
                errors: error
            });
    }
});


module.exports = router;