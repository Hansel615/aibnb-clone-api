const express = require("express");
const router = express.Router();
const placeController = require("../controllers/placeController");
const passportJWT = require("../middlewares/passportJWT")();

router.get("/:id/", placeController.show);
router.get("/new",passportJWT.authenticate(),placeController.add)
router.post("/new",placeController.store);
router.patch("/:id",passportJWT.authenticate(),placeController.patch);
router.get("",placeController.all);
router.post("/delete",placeController.delete);
module.exports = router;