exports.home = function(req, res){
  res.render('home', { title: 'Emotionly' })
};

exports.globaldash = function(req, res) {
	res.render('global.html')
}

exports.settings = function(req, res) {
	res.render('settings.html')
}

exports.personaldash = function(req, res) {
	res.render('personal.html')
}

exports.addStatus = function(req, res) {
	res.render('addStatus.html')
}