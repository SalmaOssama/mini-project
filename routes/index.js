var express = require('express');
var router = express.Router();
var projectController = require('../controllers/projectController');

// Get Homepage


router.get('/', projectController.getAllProjects);

router.post('/profile', projectController.createProject);


router.get('/profile', projectController.getProjectByUsername);


router.post('/index', projectController.createProject);

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;