const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  //JSON req
  name: { type: String, required: true },
  price: { type: Number, required: true },
  productImage: {
    type: String,
    required: true //can change to false if image uploading is not required
  }
});

module.exports = mongoose.model("Product", productSchema);
