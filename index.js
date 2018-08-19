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

app.post('/personalProfile', (req, res) => {

    console.log(`req.body is ${req.body}`);
    console.log(`req.body.id is ${req.body.id}`);

    res.json({
        idN: 32,
        title: 'Макет кабины космического корабля «Буран» покажут школьникам на Космической субботе',
        content: 'Пьер не остался обедать, а тотчас же вышел из комнаты и уехал. Он поехал отыскивать по городу Анатоля Курагина, при мысли о котором теперь вся кровь у него приливала к сердцу и он испытывал затруднение переводить дыхание. На горах, у цыган, у Comoneno — его не было. Пьер поехал в клуб. В клубе все шло своим обыкновенным порядком; гости, съехавшиеся обедать, сидели группами и здоровались с Пьером и говорили о городских новостях. Лакей, поздоровавшись с ним, доложил ему, зная его знакомство и привычки, что место ему оставлено в маленькой столовой, что князь Михаил Захарыч в библиотеке, а Павел Тимофеич не приезжали еще. Один из знакомых Пьера между разговором о погоде спросил у него, слышал ли он о похищении Курагиным Ростовой, про которое говорят в городе, правда ли это? Пьер, засмеявшись, сказал, что это вздор, потому что он сейчас только от Ростовых. Он спрашивал у всех про Анатоля; ему сказал один, что не приезжал еще, другой — что он будет обедать нынче. Пьеру странно было смотреть на эту спокойную, равнодушную толпу людей, не знавшую того, что делалось у него в душе. Он прошелся по залам, дождался, пока все съехались, и, не дождавшись Анатоля, не стал обедать и поехал домой.Пьер не остался обедать, а тотчас же вышел из комнаты и уехал. Он поехал отыскивать по городу Анатоля Курагина, при мысли о котором теперь вся кровь у него приливала к сердцу и он испытывал затруднение переводить дыхание. На горах, у цыган, у Comoneno — его не было. Пьер поехал в клуб. В клубе все шло своим обыкновенным порядком; гости, съехавшиеся обедать, сидели группами и здоровались с Пьером и говорили о городских новостях. Лакей, поздоровавшись с ним, доложил ему, зная его знакомство и привычки, что место ему оставлено в маленькой столовой, что князь Михаил Захарыч в библиотеке, а Павел Тимофеич не приезжали еще. Один из знакомых Пьера между разговором о погоде спросил у него, слышал ли он о похищении Курагиным Ростовой, про которое говорят в городе, правда ли это? Пьер, засмеявшись, сказал, что это вздор, потому что он сейчас только от Ростовых. Он спрашивал у всех про Анатоля; ему сказал один, что не приезжал еще, другой — что он будет обедать нынче. Пьеру странно было смотреть на эту спокойную, равнодушную толпу людей, не знавшую того, что делалось у него в душе. Он прошелся по залам, дождался, пока все съехались, и, не дождавшись Анатоля, не стал обедать и поехал домой.Пьер не остался обедать, а тотчас же вышел из комнаты и уехал. Он поехал отыскивать по городу Анатоля Курагина, при мысли о котором теперь вся кровь у него приливала к сердцу и он испытывал затруднение переводить дыхание. На горах, у цыган, у Comoneno — его не было. Пьер поехал в клуб. В клубе все шло своим обыкновенным порядком; гости, съехавшиеся обедать, сидели группами и здоровались с Пьером и говорили о городских новостях. Лакей, поздоровавшись с ним, доложил ему, зная его знакомство и привычки, что место ему оставлено в маленькой столовой, что князь Михаил Захарыч в библиотеке, а Павел Тимофеич не приезжали еще. Один из знакомых Пьера между разговором о погоде спросил у него, слышал ли он о похищении Курагиным Ростовой, про которое говорят в городе, правда ли это? Пьер, засмеявшись, сказал, что это вздор, потому что он сейчас только от Ростовых. Он спрашивал у всех про Анатоля; ему сказал один, что не приезжал еще, другой — что он будет обедать нынче. Пьеру странно было смотреть на эту спокойную, равнодушную толпу людей, не знавшую того, что делалось у него в душе. Он прошелся по залам, дождался, пока все съехались, и, не дождавшись Анатоля, не стал обедать и поехал домой.Пьер не остался обедать, а тотчас же вышел из комнаты и уехал. Он поехал отыскивать по городу Анатоля Курагина, при мысли о котором теперь вся кровь у него приливала к сердцу и он испытывал затруднение переводить дыхание. На горах, у цыган, у Comoneno — его не было. Пьер поехал в клуб. В клубе все шло своим обыкновенным порядком; гости, съехавшиеся обедать, сидели группами и здоровались с Пьером и говорили о городских новостях. Лакей, поздоровавшись с ним, доложил ему, зная его знакомство и привычки, что место ему оставлено в маленькой столовой, что князь Михаил Захарыч в библиотеке, а Павел Тимофеич не приезжали еще. Один из знакомых Пьера между разговором о погоде спросил у него, слышал ли он о похищении Курагиным Ростовой, про которое говорят в городе, правда ли это? Пьер, засмеявшись, сказал, что это вздор, потому что он сейчас только от Ростовых. Он спрашивал у всех про Анатоля; ему сказал один, что не приезжал еще, другой — что он будет обедать нынче. Пьеру странно было смотреть на эту спокойную, равнодушную толпу людей, не знавшую того, что делалось у него в душе. Он прошелся по залам, дождался, пока все съехались, и, не дождавшись Анатоля, не стал обедать и поехал домой.'
    });
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

app.post('/personalOlympiadSchoolboy', (req, res) => {

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
                lastName: '1ExpertLastName',
                idExpert: 1
            },
            {
                name: '2ExpertName',
                lastName: '2ExpertLastName',
                idExpert: 2
            },
            {
                name: '3ExpertName',
                lastName: '3ExpertLastName',
                idExpert: 3
            },
            {
                name: '4ExpertName',
                lastName: '4ExpertLastName',
                idExpert: 4
            },
            {
                name: '5ExpertName',
                lastName: '5ExpertLastName',
                idExpert: 5
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
            expert:
                {
                    name: 'Vasya',
                    lastName: 'Pupkin',
                    idExpert: 0
                }

        }
    });
});

app.get('/adminOlympiadExpertAjax', (req, res) => {
    res.render('adminOlympiadExpertAjax');
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

        ],
        expert: {
            name: 'Михаил',
            surname: 'Петрович',
            patronymic: 'Зубенко',
            placeOfWork: 'AVTOVAZ',
            position: 'Рабочий',
            dateOfBirth: '21.09.2000',
            document: 'http://localhost',
            nomination: 'Geography',
            status: 'подтвержден'
        }
    });
});

app.post('/personalOlympiadSucceed', (req, res) => {

    console.log(`req.body is ${req.body}`);
    console.log(`req.body.id is ${req.body.id}`);

    res.json({
        nomination: 'some',
        idExpert: 0,
        status: 'подтвержден'
    });
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/adminNews', (req, res) => {
    res.render('adminNews');
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
