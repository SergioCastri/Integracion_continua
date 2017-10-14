var express = require('express'); //libreria de express
var CodeBreaker = require('./main');
var app = express();  //crea el servicio

app.set('port', (process.env.PORT || 3000));

app.get('/setSecret/:secret', function(req, res){
  number = req.params.secret;
    CodeBreaker.setSecret(number);
    res.send({message: 'Ok, let the game begin'})
});

app.get('/guess/:number', function(req, res){
  number = req.params.number;
  res.send({result: CodeBreaker.codeBreaker(number)
});

});
app.listen(app.get('port'), function(){
  console.log('Nofrjs app listening on port', app.listen)
});

module.exports = app;
