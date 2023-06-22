const router = require('express').Router()

const imageuplodes = require('../../middelwer/multer')

const {postinsert,postviewdata,postdelet,postupdet} = require('../../Cuntroller/postCuntroller')

router.post('/postinsert',imageuplodes,postinsert)
router.get('/postviewdata',postviewdata)
router.delete('/postdelet',postdelet)
router.put('/postupdet/:id',imageuplodes,postupdet)




module.exports = router