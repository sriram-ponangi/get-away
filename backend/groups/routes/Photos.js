/*
* Authors: 
    - Rajni, Puni  
*/
const router = require('express').Router();
const verifyTokenMiddleware = require('../../utils/VerifyToken');
const verifyAdminTokenMiddleware = require('../../utils/VerifyAdminToken');

const Groups = require('../models/Groups');
const Users = require('../../users/models/Users');
const Photos = require('../models/Photos');

const createPhotosValidator = require('../validations/CreatePhotos');
const getPhotosValidator = require('../validations/GetPhotos');

const multer  = require('multer');

// Multer is used to store uploaded images in uploads folder.
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,'./uploads/');
    },
    filename: function(req, file, cb) {
        const str = Math.floor(Math.random()*10000);
        console.log(str)
        cb(null,str + file.originalname);
    },
});

// Validation: Only jpg and png image is allowed to upload
const filefilter = (req, file, cb)=>{
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        cb(null,true);
    }
    else{
        cb(null,false);
    }
};
const upload = multer({storage: storage, filefilter:filefilter});


router.post('/', verifyTokenMiddleware,upload.single('groupPhotos'), async (req, res) => {

    let validationObject = Object.assign({}, req.body);
    delete validationObject.currentUser;
    const { error } = createPhotosValidator(validationObject);
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
        const group = await Groups.findOne({ _id: validationObject.groupId });
        
        if (group) {
            const photoModel = new Photos({
                imageSource: "uploads/" + req.file.filename
            });
            const savedPhoto = await photoModel.save();
            const savedGroup = await Groups.findOneAndUpdate({ _id: group._id },
                {
                    $addToSet: {
                        photos: {
                            $each: [savedPhoto]
                        }
                    }
                },
                { new: true });

            return res.send({ group: savedGroup, savedPhoto: savedPhoto });
        }
        else {
            return res.status(500)
                .send({
                    errors: {
                        messages: ['Invalid Photo']
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
    const { error } = getPhotosValidator(groupValidationObject);
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
        const group = await Groups.findOne({ _id: groupValidationObject.groupId }, 'name description')
            .populate({
                path: 'photos',                
                options:{ sort:{"createdDate" : "descending"}}
            });
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