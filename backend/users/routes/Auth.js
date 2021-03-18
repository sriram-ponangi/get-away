/*
* Authors: 
    - Sriram, Ponangi
*/
const router = require('express').Router();
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginValidator = require('../validations/Login');
const registrationValidator = require('../validations/Registration');
const User = require('../models/Users');


router.post('/register', async (req, res) => {
    const { error } = registrationValidator(req.body);
    if (error) {
        console.log(error.details);
        return res.status(400)
            .send({
                errors: {
                    messages: error.details.map(e => e.message)
                }
            });
    }

    // Hashing Password:
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(req.body.password, salt);

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        return res.send({ user: savedUser._id });
    } catch (error) {
        return res.status(500)
            .send({
                errors: error
            });
    }
});

router.post('/login', async (req, res) => {
    const { error } = loginValidator(req.body);
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
        const user = await User.findOne({ email: req.body.email });

        // Checking if email does not exists
        if (!user) {
            return res.status(400).send('Invalid Email or Password. Email');
        }
        const isValidPassword = await bycrypt.compare(req.body.password, user.password);
        // Checking if password is not valid
        if (!isValidPassword) {
            return res.status(400).send('Invalid Email or Password. Password');
        }
        // JWT Creation:
        const token = jwt.sign(
            {
                _id: user.id,
                role: user.role,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            },
            process.env.JWT_SECRET,
            { expiresIn: '59m' });
        return res.status(200).send({
            message: 'Login Successful.',
            jwt: token
        });
    } catch (error) {
        console.log(error);
        return res.status(400)
            .send({
                errors: {
                    messages: error
                }
            });
    }
});


module.exports = router;