
/*
* Authors: 
    - Rajni, Puni
*/
var nodemailer = require('nodemailer');

module.exports = function (req) {
    const forgotPasswordEmailTemplate = '<!DOCTYPE html><html lang="en"><head><title>GetAway Contact Us</title></head><body><div style="font-size: larger;"><div style="background-color: rgb(238, 252, 255)"><div style=" font-size: x-large; background-color: rgba(0, 60, 128, 0.644);"><img src="https://csci-5709.herokuapp.com/highlights/logo.png" alt="Logo" /></div><div><hr /><h3>Query from '+req.email+'</h3><hr /><br /><p><b>Hi Admin, </b></p><p><b>Message from '+req.name+':</b></p><p> </p><p>'+req.message+'</p></br><p>GetAway Team.</p><div><a href="https://csci-5709.herokuapp.com/aboutus"> <b>About Us</b></a> |<a href="https://csci-5709.herokuapp.com/whyus"> <b>Why Us</b> </a> |<a href="https://csci-5709.herokuapp.com/contactus"> <b>Contact Us</b> </a> |</div></div></div></div></body></html>';
    
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASSWORD
        }
    });
console.log(req.email);
    var mailOptions = {
        from: req.email,
        to: process.env.EMAIL_ID,
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


