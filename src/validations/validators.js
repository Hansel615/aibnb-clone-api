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
  exports.hasName = body('name')
  .isLength({min: 5})
  .withMessage("Place name is required. Min Length 5 characters");
  exports.hasDescription = body('description')
  .isLength({min: 5})
  .withMessage("Description is required. Min Length 5 characters");
 exports.hasRooms = body('rooms').custom((value)=>{
   return value>0 ;
 })
 .withMessage("Rooms number is required");
 exports.hasMax_guests = body('max_guests').custom((value)=>{
   return value>0
 }).withMessage("Max guests must is required");
 exports.hasBathrooms = body('bathrooms').custom((value)=>{
  return value>0 ;
}).withMessage("Bathrooms must is required");
 