exports.home = function(req, res){
  res.render('home', { title: 'Emotionly' })
};

exports.globaldash = function(req, res) {
	res.render('global.html')
}

exports.settings = function(req, res) {
	res.render('settings.html')
}

exports.personal = function(req, res) {
	res.render('personal')
}

exports.addStatus = function(req, res) {
	res.render('addStatus.html')
}

exports.login = function(req, res) {
	res.render('login')
}

exports.createProfile = function(req, res) {
	res.render('createProfile')
}

exports.logout = function(req, res) {
	res.render('logout.html')
}