const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name            : { type: String, require: true },
  isDeleted       : { type: Boolean, default: false },
},
{
  timestamps: true,
});

module.exports = mongoose.model('product', ProductSchema, 'products');
