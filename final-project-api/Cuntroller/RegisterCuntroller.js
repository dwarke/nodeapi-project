const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const con = require('../cunfig/sqlCunnection')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env

const rendemstring = require('randomstring')
const sendmail = require('../middelwer/mailsend')


const register = (req, res) => {
    console.log('done');
    //    res.json({msg : 'done'})
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.json({ error: error.array() });
    }
    const sql = `SELECT * FROM register WHERE email = (${con.escape(req.body.email)})`
    con.query(sql, (err, result) => {
        if (result && result.length) {
            return res.send({ message: 'This email is already use!' });
        }
        else {
            const password = req.body.password
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    return res.send({ message: err });
                } else {
                    let mailsubject = 'Mail Verification';
                    const rendometoken = rendemstring.generate()
                    sendmail(req.body.email, mailsubject);
                    const insert = `INSERT INTO register (name,email,password ,token) VALUES ('${req.body.name}',${con.escape(req.body.email)},${con.escape(hash)},'${rendometoken}')`
                    con.query(insert, (err) => {
                        if (err) {
                            return res.send({ message: err });
                        }

                        return res.send({ msg: 'user is successfully register' });
                    })
                }
            })
        }
    })
}


const login = (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.json({ error: error.array() });
    }

    const { email, password } = req.body
    const sql = "SELECT * FROM `register` WHERE email = `" + con.escape(req.body.email) + "`"

    con.query(sql, (err, result) => {

        if (err) {
            return res.send({ message: err });
        } else {

            if (result.length > 0) {
                const userPass = result[0].password;
                console.log(userPass);
                const match = bcrypt.compare(password, userPass)

                if (match) {
                    console.log("---------> Login Successful");
                    const token = jwt.sign({ email: email, password: password }, JWT_SECRET, { expiresIn: 1000 * 60 * 60 })
                    return res.status(200).send({
                        msg: "logged in successfully",
                        user: result[0],
                        token
                    })

                } else {
                    return res.send({ message: err });
                }
            } else {
                return res.send({ message: 'Email or password is in correct!' });

            }
        }

    })

}

const profileupdet = (req, res) => {

    jwt.verify(req.token, JWT_SECRET, (err, authdata) => {
        if (err) {
            res.json({ mag: err })
        } else {
            res.json({ mag: 'profile eccessed', authdata })
        }
    })

}



module.exports = {
    register, login, profileupdet
}