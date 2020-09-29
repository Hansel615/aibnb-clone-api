const City = require("../models/city");
exports.all = async (req, res, next) => {
  try {
    const cities = await City.find({});
    res.json(cities);
  } catch (error) {
    next(error);
  }
};
