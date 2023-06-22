const router = require('express').Router()
const { signUpValidetion, UpdetprofileValidetion,loginValidetion } = require('../../helper/validation')

function varifytoken(req, res, next) {
    const beriarheader = req.headers['authentication'];
    if (typeof beriarheader !== 'undefined') {
        const bearer = beriarheader.split(" ");
        const token = bearer[1];
        req.token = token;
        next();
    } else {
        res.send({ mag: 'Token is not valid'})
    }
}

const { register, login, profileupdet } = require('../../Cuntroller/RegisterCuntroller')

const imageuplodes = require('../../middelwer/multer')

router.post('/register', signUpValidetion, register);
router.post('/login',loginValidetion, login)

router.post('/profileupdet', varifytoken, imageuplodes, UpdetprofileValidetion, profileupdet)




router.use('/slider', require('../admin/sliderRouter'))
router.use('/reset', require('../admin/resetRouter'))
router.use('/post', require('../admin/postRouter'))

module.exports = router