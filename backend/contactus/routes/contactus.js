/*
* Authors: 
    - Rajni, Puni  
*/
const router = require('express').Router();
const SendEmail = require('../../utils/ContactUsSendEmail');

router.post('/send', async (req, res) => {
    console.log(req.body);
    const emailInfo = {
        name: req.body.name,
        email: req.body.email,
        subject: "Contact Us query",
        message: req.body.message
    }
        
    const sendEmail = SendEmail(emailInfo);
    
    return res.send({message: "your message is sent to admin. GetAway team will contact you shortly."});              
});

module.exports = router;