const jwt = require("jwt-simple");
const config = require("../config/auth");

const User = require("../models/user");
const validationHandler = require("../validations/validationHandler");

exports.login = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      const error = new Error("Wrong Credentials");
      error.statusCode = 401;
      throw error;
    }

    const validPassword = await user.validPassword(password, user.password);
    if (!validPassword) {
      const error = new Error("Wrong Credentials");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.encode({ id: user.id }, config.jwtSecret);
    //return res.send({user, token});
    return res.status(200).render("welcome", { user, token });
  } catch (err) {
    next(err);
  }
};

exports.signup = async (req, res, next) => {
  try {
    validationHandler(req);
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      const error = new Error("Email already used");
      error.statusCode = 409;
      throw error;
    }
    let user = new User();
    user.email = req.body.email;
    user.password = await user.encryptPassword(req.body.password);
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.role = req.body.role;
    user = await user.save();

    const token = jwt.encode({ id: user.id }, config.jwtSecret);
    return res.status(201).render("welcome", { user, token });
    //return res.status(201).send({user,token});
  } catch (err) {
    res.status(err.statusCode);
    next(err);
  }
};
exports.me = async (req, res, next) => {
  try {
    const user = await User.findById(req.user);
    return res.send(user);
    //res.render("welcome", { users: users })
  } catch (err) {
    next(err);
  }
};
