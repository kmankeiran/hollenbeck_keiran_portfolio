const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

const mailer = require('nodemailer');
const auth = require('../mailcreds');

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: auth.user,
        pass: auth.pass
    }
});

router.get('/', (req, res) => {
    console.log('at the main route');

    sql.getConnection((err, connection) => {
        if (err) { throw err; } // this means we're not connected

        let query = "SELECT ID, portID, Name, Info, Picture, Video FROM tbl_info";

        connection.query(query, (err, result) => {
            connection.release();

            if (err) { throw err }

            res.render('home', { portfolio: result });
        })
    })
})
// this resolves to localhost:3000/anything (whatever you put after the slash in the location bar)
router.get('/users/:id', (req, res) => {
    console.log('hit a dynamic route!');
    console.log(req.params.id);



    sql.getConnection((err, connection) => {
        if (err) { throw err; } // this means we're not connected

        let query = `SELECT * FROM tbl_info WHERE portID="${req.params.id}"`;

        connection.query(query, (err, result) => {
            connection.release();

            if (err) { throw err }

            console.log(result);
            res.json(result);
        })
    })
})

router.post('/mail', (req, res) => {

    console.log('hit mail route');
    console.log('body: ', req.body);
    // get the mail options from the form -> the url params using bodyParser middleware
    const mailOptions = {
        from: req.body.email,
        to: auth.user,
        replyTo: req.body.email,
        subject: `From portfolio site: Subject = ${req.body.subject || 'none'}`, // Subject line
        text: req.body.comment
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log("failed... ", err);
            res.json(err);
        } else {
            console.log("success! ", info);
            res.json(info);
        }
    });
})

module.exports = router;
