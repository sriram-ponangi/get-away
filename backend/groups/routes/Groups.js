const router = require('express').Router();
const verifyTokenMiddleware = require('../../utils/VerifyToken');
const verifyAdminTokenMiddleware = require('../../utils/VerifyAdminToken');
const Groups = require('../models/Groups');

router.get('/user/all', verifyTokenMiddleware, (req,res)=>{
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


router.get('/admin/all', verifyAdminTokenMiddleware, (req,res)=>{
    res.json({
        reqBody: req.body,
        groups: [
            {
                name: "ADMIN One",
                country: "India"
            },
            {
                name: "ADMIN Two",
                country: "Canada"
            },
        ]
    })
});

router.get('/all', (req,res)=>{
    Groups.findOne({});
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


router.get('/all', (req,res)=>{
    Groups.findOne({});
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

module.exports = router;