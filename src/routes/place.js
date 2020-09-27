const express = require("express");
const router = express.Router();
const placeController = require("../controllers/placeController");
const passportJWT = require("../middlewares/passportJWT")();

router.get("/places/:id/", placeController.show);
router.get("/places/new",passportJWT.authenticate(),placeController.add)
router.post("/places/new",passportJWT.authenticate(),placeController.store);
router.patch("/places/:id",passportJWT.authenticate(),placeController.patch);
router.get("/places",placeController.all);

module.exports = router;