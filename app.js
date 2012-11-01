
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  //app.set('view engine', 'jade');
  app.engine('html', require('ejs').renderFile);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

//dummy data
var currUser = {
  'name': 'Katherine Chen',
  'email': 'kchen12@stanford.edu',
  'password': 'hello',
  'gender': 'f',
  'privacy': 'friends',
  'location': 'on'
}

//variable that holds personal feed
var globalPosts = [
  { text: 'I had the best day ever!', emotion: 'happy', location: 'Boston, MA'},
  { text: 'Did not do so hot on my Chem exam...', emotion: 'sad', location: 'Stanford, CA'},
  { text: 'Normal day, not much going on', emotion: 'neutral', location: 'Houston, TX'}
]

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.home);
app.get('/globaldashboard', routes.globaldash)
app.get('/settings', routes.settings) 
app.get('/personal', routes.personal)
app.get('/addStatus', routes.addStatus);
app.get('/login', routes.login);
app.get('/logout', routes.logout);
app.post('/save-settings', function(req, res) {
  console.log('got settings')
  var params = req.body;

  currUser['name'] = params['name']
  currUser['email'] = params['email']
  if(params['pass']) currUser['password'] = params['pass']
  currUser['gender'] = params['gender']
  currUser['privacy'] = params['privacy']
  currUser['location'] = params['flip-s']

  res.render('global.html')
}) 

app.get('/user-info', function(req, res) {
  console.log(JSON.stringify(currUser))
  res.write(JSON.stringify(currUser))
  res.end()
})

app.get('/users', user.list);

app.post('/postStatus', function(req, res) {
     var status = {};
     status['text'] = req.body['textarea'];
     var emotion = req.body['radio-choice'];
     if (emotion == 'choice-1') {
        status['emotion'] = 'happy';
     } else if (emotion == 'choice-2') {
        status['emotion'] = 'neutral';
     } else if (emotion == 'choice-3') {
        status['emotion'] = 'sad';
     }
     status['location'] = 'Stanford, CA';
     globalPosts.push(status);
     res.render('personal.html');
});

app.get('/getPersonalFeed', function(req, res) {
    res.write(JSON.stringify(globalPosts));
    res.end();
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
