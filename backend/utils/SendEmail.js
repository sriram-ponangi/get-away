/*
* Authors: 
    - Sriram, Ponangi
*/
var nodemailer = require('nodemailer');

module.exports = function (req) {
    const forgotPasswordEmailTemplate = '<!DOCTYPE html><html lang="en"><head><title>GetAway Forgot Password</title></head><body><div style="font-size: larger;"><div style="background-color: rgb(238, 252, 255)"><div style=" font-size: x-large; background-color: rgba(0, 60, 128, 0.644);"><img src="https://csci-5709.herokuapp.com/highlights/logo.png" alt="Logo" /></div><div><hr /><h3>Temporarty Password:</h3><hr /><br /><p><b>Greetings '+req.firstName+' ' +req.lastName+', </b></p><p>Please use this temporary password to login:</p><p> <b>'+req.tempPassword+' </b></p><p>You can change your password from the update profile page anytime.</p><p><a href="https://csci-5709.herokuapp.com/profile/login" style="background-color: whitesmoke; font-size: large; border: 2px solid rgb(4, 72, 88); "> <b>Click Here To Login</b></a> </p><p>Thanks & Regards,</p></br><p>GetAway Team.</p><div><a href="https://csci-5709.herokuapp.com/aboutus"> <b>About Us</b></a> |<a href="https://csci-5709.herokuapp.com/whyus"> <b>Why Us</b> </a> |<a href="https://csci-5709.herokuapp.com/contactus"> <b>Contact Us</b> </a> |</div></div></div></div></body></html>';

    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    var mailOptions = {
        from: process.env.EMAIL_ID,
        to: req.to,
        subject: req.subject,
        html: forgotPasswordEmailTemplate
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return {
                errors: error
            };
        } else {
            console.log('Email sent: ',req.to , info.response);
            return{
                email: info.response
            };
            
        }
    });
}


