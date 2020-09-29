const {body} = require('express-validator');

exports.isEmail = body('email')
  .isEmail()
  .withMessage('Email fields must contain a correct email address');
exports.hasPassword = body('password')
  .exists()
  .withMessage('Password is required/ cannot be empty');
exports.hasFirstName = body('first_name')
  .isLength({min: 5})
  .withMessage("First name is required. Min Length 5 characters");
exports.hasLastName = body('last_name')
  .isLength({min: 5})
  .withMessage("Last name is required. Min Length 5 characters");
exports.hasRole = (body('role')
  .equals("host") || body('role').equals("visitor"))
  .withMessage("Must have role (visitor or host)");
  exports.Name = body('name')
  .isLength({min: 5})
  .withMessage("Place name is required. Min Length 5 characters");
  exports.hasDescription = body('description')
  .isLength({min: 5})
  .withMessage("Description is required. Min Length 5 characters");
 
  