var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'keiranburner@gmail.com',
           pass: 'helloHacker'
       },
       tls:{
           rejectUnauthorized:false
       }
   });

const mailOptions = {
  from: 'keiranburner@gmail.com', // sender address
  to: 'kmankeiran@gmail.com', // list of receivers
  subject: 'Nodemailer request', // Subject line
  html: '<p>This is some text to test it</p>' // plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log('Error, failed to send email.')
    else
      console.log('The message has been sent! Thank You');
 });