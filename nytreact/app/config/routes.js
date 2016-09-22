import React = require('react');

import Router = require('react-router');
import Route = Router.Route;

import IndexRoute = Router.IndexRoute;

import Main = require('../components/Main');
import Saved = require('../components/Saved');
import Search = require('../components/Search');


router.get('/', function(req, res){
	models.Main.get 
})
	.then(function(Main){
		res.render('/Main')
	});


router.get('/api/saved', function(req, res){
	models.Saved.findAll({
		include: [models.Saved]
	})
	.then(function(Saved){
		res.render('')
	})
})

router.post('/api/Saved', function(req, res){
	models.Saved.post
})
	.then(function(){
		res.redirect('/')
	})

router.delete('/api/Saved', function(req,res){
	models.Saved.destroy({
		where: {
			id: req.params.id
		}
	})

	.then(function(){
		res.redirect('/')
	});
});

module.exports = router;







