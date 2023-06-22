const router = require('express').Router()

const imageuplodes = require('../../middelwer/multer')

const {resetinsert,resetviewdata,resetdelet,resetupdet} = require('../../Cuntroller/resetCuntroller')

router.post('/resetinsert',imageuplodes,resetinsert)
router.get('/resetviewdata',resetviewdata)
router.delete('/resetdelet',resetdelet)
router.put('/resetupdet/:id',imageuplodes,resetupdet)



module.exports = router