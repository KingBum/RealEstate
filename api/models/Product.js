const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    city : {type : String},
    desc: { type: String},
    categories: {type: Array},
    likes: {
      type: Array,
      default: [],
    },
    location : {type: String},
    inStock: { type: Boolean, default: true },
    owner : {type : mongoose.Schema.Types.ObjectId , ref: "User"}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);