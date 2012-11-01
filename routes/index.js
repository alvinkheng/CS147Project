exports.home = function(req, res){
  res.render('home', { title: 'Emotionly' })
};

exports.globaldash = function(req, res) {
	res.render('global.html')
}

exports.settings = function(req, res) {
	res.render('settings.html')
}