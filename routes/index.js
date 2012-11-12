exports.home = function(req, res){
  res.render('home', { title: 'Emotionly' })
};

exports.globaldash = function(req, res) {
	res.render('global')
}

exports.settings = function(req, res) {
	res.render('settings')
}

exports.addStatus = function(req, res) {
	res.render('addStatus')
}

exports.login = function(req, res) {
	res.render('login')
}

exports.createProfile = function(req, res) {
	res.render('createProfile')
}