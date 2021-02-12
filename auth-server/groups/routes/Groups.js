const router = require('express').Router();
const verifyTokenMiddleware = require('../../utils/VerifyToken');

router.get('/', verifyTokenMiddleware, (req,res)=>{
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
})

module.exports = router;