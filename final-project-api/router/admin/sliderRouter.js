const router = require('express').Router()

const imageuplodes = require('../../middelwer/multer')

const {sliderinsert,sliderviewdata,sliderdelet,sliderUpdet}= require('../../Cuntroller/sliderCuntroller');

router.post('/sliderinsert',imageuplodes,sliderinsert);
router.get('/sliderviewdata',sliderviewdata);
router.delete('/sliderdelet',sliderdelet);
router.put('/sliderUpdet/:id',imageuplodes,sliderUpdet);


module.exports = router;