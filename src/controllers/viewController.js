const User = require("../models/user");
const Place = require("../models/place");


exports.signup = (req,res) => {
    res.render('signup');
};

exports.login = (req, res) => {
	res.status(200).render('login');
};