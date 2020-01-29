const Listings = require("../models/listings");

module.exports = {
  index: (req, res) => Listings.find({}).then(listings => res.json(listings)),

  show: (req, res) =>
    Listings.findOne({ id: req.params.id }).then(listings =>
      res.json(listings)
    ),

  showById: (req, res) =>
    Listings.find({ _id: req.params._id }).then(listings => res.json(listings)),

  showByAvailability: (req, res) =>
    Listings.find({ availability: req.params.availability }).then(listings =>
      res.json(listings)
    ),
  create: (req, res) =>
    Listings.create(req.body).then(listings => res.json(listings)),

  edit: (req, res) =>
    Listings.findOneAndUpdate({ id: req.params.id }, req.body).then(listings =>
      res.json(listings)
    ),

  delete: (req, res) =>
    Listings.findOneAndDelete({ id: req.params.id }).then(listings =>
      res.json(listings)
    )
};
