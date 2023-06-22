const nodemailer = require('nodemailer');
const { SMTP_MAIL, SMTP_PASSWORD } = process.env;

const sendmail = async (email, mailSubject, content) => {
    try {
        
        const transporter = nodemailer.createTransport({
            
            secure: false,
            requireTLS: true,
            auth: {
                user: SMTP_MAIL,
                pass: SMTP_PASSWORD
            }
        });
        const mailOptions = {
            from: SMTP_MAIL,
            to: email,
            subject:mailSubject,
            html: content
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error:', error);
            } else {
               
                console.log('Email sent:', info.response);
                
            }
        });



    } catch (err) {
        console.log(err);
    }
}


module.exports = sendmail