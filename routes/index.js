var express = require("express");
var router = express.Router();
//var listingsController = require("../controllers/listings");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

// router.get("/listings", listingsController.index);
// router.get("/listings/:id", listingsController.show);
// router.post("/listings/create", listingsController.create);
// router.put("/listings/edit/:id", listingsController.edit);
// router.delete("/listings/delete:id", listingsController.delete);

module.exports = router;
