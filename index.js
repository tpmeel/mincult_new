

const express = require('express'),
    ejs = require('ejs'),
    path = require('path'),
    bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// ========== //
// settings //
// ========== //

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// ========== //
// routes //
// ========== //

app.get('/', (req, res) => {
    res.render('main');
});

// страница входа
app.get('/signin', (req, res) => {
    res.render('signin');
});

// страница входа
app.get('/personalOlympiadSucceed', (req, res) => {
    res.render('personalOlympiadSucceed');
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

app.get('/adminOlympiadSchoolboyPersonal', (req, res) => {
    res.render('adminOlympiadSchoolboyPersonal', {
        name: 'Иван',
        lastName: 'Иванов',
        patronymic: 'Иванович',
        school: 'ГБОУ Школа №228',
        lvl: '9',
        date: '12.09.1999',
        document: 'http://localhost:3000',
        nomination: 'География',
        expert: 'Зубенко Михаил Петрович'
    });
});

app.get('/adminOlympiadSchoolboyAjax', (req, res) => {
    res.render('adminOlympiadSchoolboyAjax', {
        name: 'Иван',
        lastName: 'Иванов',
        patronymic: 'Иванович',
        school: 'ГБОУ Школа №228',
        lvl: '9',
        date: '12.09.1999',
        document: 'http://localhost:3000',
        nomination: 'География',
        expert: 'Зубенко Михаил Петрович'
    });
});
app.post('/personalOlympiad', (req, res) => {

    console.log(`req.body is ${req.body}`);
    console.log(`req.body.id is ${req.body.id}`);

    res.json({
        name: 'some',
        lastName: 'SomeLastName',
        patronymic: 'SomePtronymic',
        school: 'GBOU 2101',
        lvl: '9',
        date: '21.09.2000',
        document: 'http://localhost',
        nomination: 'Medicine',
        expert: 'Vasya Pupkin'
    });
});

app.post('/personalOlympiadExpert', (req, res) => {

    console.log(`req.body is ${req.body}`);
    console.log(`req.body.id is ${req.body.id}`);

    res.json({
        nominations: [
            'firstNomination',
            'secondNomination',
            'thirdNomination'
        ],
        listOfExperts: [
            {
                name: '1ExpertName',
                lastName: '1ExpertLastName'
            },
            {
                name: '2ExpertName',
                lastName: '2ExpertLastName'
            },
            {
                name: '3ExpertName',
                lastName: '3ExpertLastName'
            },
            {
                name: '4ExpertName',
                lastName: '4ExpertLastName'
            },
            {
                name: '5ExpertName',
                lastName: '5ExpertLastName'
            }

        ],
        schoolboy: {
            name: 'some',
            lastName: 'SomeLastName',
            patronymic: 'SomePtronymic',
            school: 'GBOU 2101',
            lvl: '9',
            date: '21.09.2000',
            document: 'http://localhost',
            nomination: 'Geography',
            expert: 'Vasya Pupkin'
        }
    });
});

app.get('/personalOlympiad', (req, res) => {
    res.render('personalOlympiad');
});

app.get('/personalOlympiadExpert', (req, res) => {
    res.render('personalOlympiadExpert');
});

app.post('/personalOlympiadExpert', (req, res) => {
// если видишь где-то в коносли {}, undefined - значит данные не приходят
    console.log(`=========================== new request =================`);
    console.log(`Запрос по адресу /personalOlympiadExpert, метод POST`);
// вообще должны тут быть данные
    console.log(`req.body is: ${req.body}`);
// req.body.переменная где переменная - название того, что отправляешь с фронта
    console.log(`req.body.data ${req.body.data}`);

});
// ========== //
// listening //
// ========== //
app.listen(port, () => {
    console.log('Приложение доступно по адресу http://localhost:'+port);
});

