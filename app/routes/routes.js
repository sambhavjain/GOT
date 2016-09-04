var battle = require('../config/battle');
// fs = require('fs')
module.exports = function(app){

	app.get('/list', battle.list)
	app.get('/count', battle.count)
	app.get('/stat', battle.stat)
	
}