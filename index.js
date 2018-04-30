const express = require('express'),
      ejs     = require('ejs'),
      path    = require('path');
const app = express();
const port = process.env.PORT || 3000;


// ========== //
//  settings  //
// ========== //

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));

// ========== //
//   routes  //
// ========== //

app.get('/', (req, res) => {
    res.render('main');
});

// страница входа
app.get('/signin', (req, res) => {
    res.render('signin');
});

// страница регистрации школьника
app.get('/signup', (req, res) => {
    res.render('signup');
});

// страница регистрации научного руководителя
app.get('/signupManager', (req, res) => {
    res.render('signupManager');
});

// страница регистрации научного руководителя
app.get('/signupExpert', (req, res) => {
    res.render('signupExpert');
});

// страница личного кабинета
app.get('/personalProfile', (req, res) => {
    res.render('personalProfile', {
        name: 'Иван',
        lastName: 'Иванов',
        patronymic: 'Иванович'
    });
});

app.get('/personalProfileExpert', (req, res) => {
    res.render('personalProfileExpert', {
    name: 'Иван',
    lastName: 'Иванов',
    patronymic: 'Иванович'
});
});

app.get('/personalOlympiad', (req, res) => {
    res.render('personalOlympiad');
});

app.get('/personalOlympiadExpert', (req, res) => {
    res.render('personalOlympiadExpert');
});

// ========== //
// listening  //
// ========== //
app.listen(port, () => {
    console.log('Приложение доступно по адресу http://localhost:'+port);
});
