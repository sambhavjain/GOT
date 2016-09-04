var fs = require('fs');

exports.list = function(req ,res){
	fs.readFile(__dirname + '/../battles.json', 'utf8', function (err, data) {
	  if (err) throw err;
	  obj = JSON.parse(data);
	  //console.log(obj)
	  res.status(200).send({battles: obj})
	});
}

exports.count = function(req, res){
	fs.readFile(__dirname + '/../battles.json', 'utf8', function (err, data) {
	  if (err) throw err;
	  console.log(data.length)
	  obj = JSON.parse(data);
	  res.status(200).send({Count: obj.length})
	  //obj = JSON.parse(data); 
	 
	});	
}

exports.stat = function(req, res){
	fs.readFile(__dirname + '/../battles.json', 'utf8', function (err, data) {
	  if (err) throw err;
	  obj = JSON.parse(data); 
	 	console.log(obj.length)
	 	//console.log(obj)
	 	//res.send(obj)
	 var attack = []
	 var map = {}
	 for(var i=0; i<obj.length; i++){
	 	
	 	map.set('attecker_king', )
	 	var king_obj = {
		 	name: "",
		 	count: 0
	 	}	
	 	king_obj.name = obj[i].attacker_king
	 	king_obj.count += 1
	 	attack.push(king_obj) 
	 	console.log(attack)
	 }	
		
	});		
}