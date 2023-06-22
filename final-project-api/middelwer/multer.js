const multer = require('multer');
const path = require('path');
const imagespath = path.join('fileUplodes');
const stroeg = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, imagespath)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + file.originalname)
    }
});
const imageuplodes = multer({ storage: stroeg }).single('avatar')
module.exports = imageuplodes