const Place = require("../models/place");

exports.show = async (req, res, next) => {
    try {
      const place = await Place.findOne({ _id: req.params.id });
      res.json(place)
      
      //res.render("place", {places: places});
    } catch (error) {
      next(error);
    }
  };

//   manque con  : Est ce qu'il faut mettre avant try catch
//       if(!existingPlace){
//       const error = new Error("La ressource demandé n'existe pas");
//       error.statusCode = 404;
//       throw error;
//     }

exports.add =(req, res) => {    
    res.render("new");
};

exports.store = async (req, res, next) => {
    try {
      let place = new Place(req.body);
      place = await place.save();
      res.json(place);
    } catch (error) {
      next(error);
    }
  };

  //manque validators

  exports.patch = async (req, res) => {

        try {
            // console.log(req.params)
            const place = await Place.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            });
    
            res.status(201).json({
                status: 'success',
                data: {
                    data: oneHotel
                }
            });
        } catch (err) {
            res.status(400).json({
                status: 'fail',
                message: err
            });
        }
    };

    //manque code scénari

    exports.all = async (req, res, next) => {
        try {
          const places = await Place.find({
            
          });
          console.log (places)
          //res.render("places", { places: places });
          res.json(places)
        } catch (error) {
          next(error);
        }
      };