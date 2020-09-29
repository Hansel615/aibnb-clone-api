const User = require("../models/user");
const Place = require("../models/place");


exports.signup = (req,res) => {
    res.render('signup');
};
