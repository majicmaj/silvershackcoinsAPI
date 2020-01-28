const Listings = require("../models/listings");

module.exports = {
  index: (req, res) => Listings.find({}).then(listings => res.json(listings)),

  show: (req, res) =>
    Listings.find({ id: req.params.id }).then(listings => res.json(listings)),

  create: (req, res) =>
    Listings.create(req.body).then(listings => res.json(listings)),

  edit: (req, res) =>
    Listings.findOneAndUpdate({ id: req.params.id }, req.body).then(listings =>
      res.json(listings)
    ),

  delete: (req, res) =>
    Listings.delete({ id: req.params.id }).then(listings => res.json(listings))
};
