const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true},
  availability: { type: Boolean, required: true }
});

const storyModel = mongoose.model("listingModel", listingSchema);

module.exports = listingModel;
