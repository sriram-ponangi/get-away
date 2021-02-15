const router = require('express').Router();
const verifyTokenMiddleware = require('../../utils/VerifyToken');
const User = require('../models/Users');

router.get('/', verifyTokenMiddleware, async (req, res) => {
    try{
        const user = await User.findOne(
            { _id: req.body.currentUser._id },
            '-_id firstName lastName email role');
        res.json(user);
    }catch (error) {
        return res.status(400)
            .send({
                errors: error
            });
    }
    
});

module.exports = router;