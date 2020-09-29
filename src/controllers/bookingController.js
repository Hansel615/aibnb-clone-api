const Booking = require('../models/booking')

exports.store = async (req, res, next) => {
    try {
      let booking = new Booking(req.body);
      booking = await booking.save();
      res.json(booking);
    } catch (error) {
      next(error);
    }
  };
exports.getReservations = async (req ,res ,next) =>{
    try{
    const bookings = await Booking.find({user : req.params.id});
    console.log(bookings)
    res.json(bookings)
    }catch(error){
        next(error) ;
    }
};
exports.deleteReservation = async (req, res, next) =>{
    try{
        console.log(req.body.id)
        const booking = await Booking.findById(req.body.id);
        if(!booking){
            const error = new Error("La reservation demandé n'existe pas");
            error.statusCode = 404;
            throw error;
        }
        await Booking.deleteOne(booking) ;
        res.status(201).json({
            status: 'success'
        }) ;
    }catch(error){
        next(error) ;
    }
};