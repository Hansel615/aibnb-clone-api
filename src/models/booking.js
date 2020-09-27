const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  place: { type: Schema.Types.ObjectId, ref:"place"},
  user: {type: Schema.Types.ObjectId, ref:"user"},
  check_in: { type: Date, required: true },
  check_out: { type: Date, required:true }
});

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;