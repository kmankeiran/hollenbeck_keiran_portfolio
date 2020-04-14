const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');

// set the port
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', require('./routes/index'));

app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    err.customMessage = "Oh Dear! You went to something that doesn't exist! did you want to go back?"

    next(err);
})

app.use((err, req, res, next) => {
    res.render('error', { data: err, layout: 'errorPage' });
})

app.listen(port, () => {
    console.log(`app is running on ${port}`);
})

