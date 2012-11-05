
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var mysql = require('mysql');
var connection = mysql.createConnection({
                                        host : 'mysql-user-master.stanford.edu',
                                        user : 'ccs147vinster',
                                        password : 'fiepheej',
                                        database : 'c_cs147_vinster',
});
connection.connect();

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

// dummy data
var currUser = {
  'name': 'Katherine Chen',
  'email': 'kchen12@stanford.edu',
  'password': 'hello',
  'gender': 'f',
  'privacy': 'friends',
  'location': 'on'
}

//variable that holds global posts
var globalPosts = [
  { text: 'Really excited to show off my Halloween costume', emotion: 'happy', location: 'Stanford, CA', date: 'Oct 31'},
  { text: 'I had the best day ever!', emotion: 'happy', location: 'Boston, MA', date: 'Oct 31'},
  { text: 'Did not do so hot on my Chem exam...', emotion: 'sad', location: 'Stanford, CA', date: 'Oct 30'},
  { text: 'Normal day, not much going on', emotion: 'neutral', location: 'Houston, TX', date: 'Oct 30'}
]

//variabe that holds personal posts
var personalPosts = [
    { text: 'I hate midterms!!!', emotion: 'sad', location: 'Stanford, CA'},
    { text: 'Section was great today!', emotion: 'happy', location: 'Stanford, CA'},
    { text: 'Wheres my unicorn?', emotion: 'neutral', location: 'Stanford, CA'}
]

var globalAnalytics = [
  {}
]
// end dummy data

app.configure('development', function(){
  app.use(express.errorHandler());
});


// routes
app.get('/', routes.personal);
app.get('/global', routes.globaldash)
app.get('/globalposts', function(req, res) {
  res.write(JSON.stringify(globalPosts))
  res.end()
})
app.get('/globalanalytics', function(req, res) {
  res.write(JSON.stringify(globalAnalytics))
  res.end()
})

app.get('/settings', routes.settings) 
app.get('/personal', routes.personal)
app.get('/addStatus', routes.addStatus);
app.get('/login', routes.login);
app.get('/createProfile', routes.createProfile);
app.get('/logout', routes.logout);

app.post('/create-profile', function(req, res) {
    var params = req.body;
    connection.query('SELECT * from Profiles WHERE email = ?', params.email, function(err, rows, fields) {
        if (err) throw err;
        if (rows.length === 0) {
             connection.query('INSERT INTO Profiles SET ?', params, function(err, result) {
                              if (err) throw err;
                              res.render('personal.html');
                              });   
        }        
    });
})

app.post('/attempt-login', function(req, res) {
         
         })

app.post('/save-settings', function(req, res) {
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
    var params = req.body;
     var status = {};
     status['text'] = params['textarea'];
     var emotion = params['radio-choice'];
     if (emotion == 'choice-1') {
        status['emotion'] = 'happy';
     } else if (emotion == 'choice-2') {
        status['emotion'] = 'neutral';
     } else if (emotion == 'choice-3') {
        status['emotion'] = 'sad';
     }
     status['location'] = 'Stanford, CA';
     globalPosts.unshift(status);
     personalPosts.unshift(status);
     res.render('personal.html');
});

app.get('/getPersonalFeed', function(req, res) {
    res.write(JSON.stringify(personalPosts));
    res.end();
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
