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
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');

    let query = "SELECT ID, portID, Name, Info, Picture, Video FROM tbl_info";

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        //console.log(result); // should see objects wrapped in an array

        // render the home view with dynamic data
        res.render('home', { portfolio: result });
    })
})
// this resolves to localhost:3000/anything (whatever you put after the slash in the location bar)
router.get('/users/:id', (req, res) => {
    console.log('hit a dynamic route!');
    console.log(req.params.id);

    let query = `SELECT * FROM tbl_info WHERE portID="${req.params.id}"`;

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        console.log(result); // should see objects wrapped in an array

        //turn our social property into an array - it's just text in the DB,
        // which isn't really anything we can work with

        // result[0].social = result[0].social.split(",").map(function(item) {
        //     item = item.trim(); //remove the extra spaces from each word

        //     return item;
        // });

        // console.log('after split: ', result[0]);

        // send the DB query back to the browser
        res.json(result);
    })
})

router.post('/mail', (req, res) => {

    console.log('hit mail route');
    console.log('body: ', req.body);
    // get the mail options from the form -> the url params using bodyParser middleware
    const mailOptions = {
        from: req.body.usermail,
        to: auth.user,
        replyTo: req.body.usermail,
        subject: `From portfolio site: Subject = ${req.body.subject || 'none'}`, // Subject line
        text: req.body.message
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
