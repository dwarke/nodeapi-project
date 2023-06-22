require('dotenv').config();
const express = require("express");
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors')
const con = require('./cunfig/sqlCunnection');
const muletr = require('multer');

app.use(express.json())
app.use(express.urlencoded())
app.use(cors());

app.use('/api', require('./router/admin/registerRoute'))

app.set('port', (4000));
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Intrenal Server err";
    res.status(err.statusCode).json({
        message: err.message,
    });
});



app.listen(4000, () => console.log('Server is start on port :-' + 4000))
