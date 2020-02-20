var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
	//send a boolean var
	projects["viewAlt"]=false;
  	response.render('index', projects);
};



//create a new controller --> export viewAlt
exports.viewAlt= function(request, response){
	//send a boolean var
	projects["viewAlt"]=true;
  	response.render('index', projects);
};
