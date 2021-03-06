var express = require("express");
var router = express.Router();
var listingsController = require("../controllers/listings");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/test", function(req, res, next) {
  res.send("OK");
});

router.get(
  "/listings/availability/:availability",
  listingsController.showByAvailability
);
router.get("/listings/id/:_id", listingsController.showById);
router.get("/listings/:id", listingsController.show);
router.get("/listings", listingsController.index);
router.post("/listings/create", listingsController.create);
router.put("/listings/edit/:id", listingsController.edit);
router.delete("/listings/delete/:id", listingsController.delete);

module.exports = router;
