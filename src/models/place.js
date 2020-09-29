const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema({
  name: { type: String, ref: "name", required: true },
  description: { type: String, ref: "description", required: true },
  rooms: { type: Number, required: true, ref: "rooms" },
  bathrooms: { type: Number, required: true, ref: "bathrooms" },
  max_guests: { type: Number, required: true, ref: "max_guests" },
  price_by_night: { type: Number, required: true, ref: "price_by_night" },
  available: { type: [], ref: "available" },
  user: { type: Schema.Types.ObjectId, ref: "user" },
  city_id: { type: Schema.Types.ObjectId, ref: "city" },
});

PlaceSchema.methods.convertDate = async (date) => {
  const result = date.toISOString();
  return result;
};
const Place = mongoose.model("Place", PlaceSchema);

module.exports = Place;
