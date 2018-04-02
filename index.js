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

// страница личного кабинета
app.get('/personal', (req, res) => {
    res.render('personal', {
        name: 'Иван',
        lastName: 'Иванов',
        patronymic: 'Иванович'
    });
});

// ========== //
// listening  //
// ========== //
app.listen(port, () => {
    console.log('Приложение доступно по адресу http://localhost:'+port);
});
