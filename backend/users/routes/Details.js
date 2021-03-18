/*
* Authors: 
    - Sriram, Ponangi
*/
const router = require('express').Router();
const bycrypt = require('bcryptjs');
var crypto = require("crypto");

const updateProfileValidator = require('../validations/UpdateProfile');
const forgotPasswordValidator = require('../validations/ForgotPassword');
const verifyTokenMiddleware = require('../../utils/VerifyToken');
const SendEmail = require('../../utils/SendEmail');

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


router.post('/forgot-password', async (req, res, next) => {
    // Validating Request Body:
    const { error } = forgotPasswordValidator(req.body);
    if (error) {
        console.log('Invalid Request Body: ', error.details);
        return res.status(400)
            .send({
                errors: {
                    messages: error.details.map(e => e.message)
                }
            });
    }

    try {
        // Checking if email does not exists
        const valid_user = await User.findOne({ email: req.body.email });        
        if (!valid_user) {            
            return res.send({message: "An Email with temporary login details will be sent if your account is valid."});            
        }  
        req.body.valid_user = valid_user;  
    } catch (error) {
        console.log('Error While Finding the User in Forgot Password: ', error);
        return res.status(500)
                .send({
                    errors: error
                });
    }

    // Generating a random password
    const temp_password = crypto.randomBytes(20).toString('hex');
    // console.log('temp_password', temp_password);

    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(temp_password, salt);
    // console.log('hashedPassword', hashedPassword);
    
    const filter = {email: req.body.email}
    const update = {password: hashedPassword}
    try {
        const savedUser = await User.findOneAndUpdate(filter, update);
        // return res.redirect('/profile/login');  
    } catch (error) {
        console.log('Error While Updating the Temp Password: ', error);
        return res.status(500)
            .send({
                errors: error
            });
    }

    const emailInfo = {
        to: req.body.email,
        subject: 'Confidential: Temporary Password',
        firstName: req.body.valid_user.firstName,
        lastName: req.body.valid_user.lastName,
        tempPassword: temp_password       
    }
    
    
    const sendEmail = SendEmail(emailInfo);
    

    return res.send({message: "An Email with temporary login details will be sent if your account is valid."});  ;            

});


router.post('/update-profile', verifyTokenMiddleware, async (req, res) => {
    
    let validationObject = Object.assign({}, req.body);    
    delete validationObject.currentUser;
    
    const { error } = updateProfileValidator(validationObject);
    if (error) {
        console.log(error.details);
        return res.status(400)
            .send({
                errors: {
                    messages: error.details.map(e => e.message)
                }
            });
    }

    const filter = {email: req.body.currentUser.email}
    let update = {firstName: req.body.firstName, lastName: req.body.lastName }

    if(req.body.password || req.body.confirmPassword) {        
        if(req.body.password === req.body.confirmPassword) {
            // hash password...
            const salt = await bycrypt.genSalt(10);
            const hashedPassword = await bycrypt.hash(req.body.confirmPassword, salt);
            update.password = hashedPassword;
        }
        else{
            return res.status(400)
            .send({
                errors: {
                    messages: 'Password and confirm password donot matach.'
                }
            });
        }
    }   
    
    try {
        const savedUser = await User.findOneAndUpdate(filter, update); 
        const updatedUser = await User.findOne(filter);  
        
        return res.status(200)
        .send({
            message: 'Update Successful',
            updateUser: {
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                email: updatedUser.email
            }
        });     
    } catch (error) {
        console.log('Error While Updating user profile: ', error);
        return res.status(500)
            .send({
                errors: error
            });
    }   
   


});

router.get('/groups', verifyTokenMiddleware, async (req, res) => {      

    try {        
        const group = await User.findOne({ _id: req.body.currentUser._id },
             'firstName lastName')
             .populate({ path: 'groups', select: ['name','description',
             'countryName', 'locationName', 'highlight', 'imageSource'] });
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