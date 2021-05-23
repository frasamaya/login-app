const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	if (req.isAuthenticated()) {
		res.status(201).render('index', {title: 'Home'});
	}else{
		res.redirect('/user/login');
	}
});


module.exports = router;
