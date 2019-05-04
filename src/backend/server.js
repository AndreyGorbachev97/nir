var express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var app = express();
var neurals = require('./neurals/neural');


app.get('/', function (req, res) {
    res.send('hello api')
})

router.post('/neural_word', async (req, res) => {
    console.log(req.body.text)
    res.send(neurals.neural_word(req.body.text))
  })

  app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    return next();
});

app.use(bodyParser.json());

app.use('/api', router)

app.listen(3012, function () {
    console.log('api app startes')
})



