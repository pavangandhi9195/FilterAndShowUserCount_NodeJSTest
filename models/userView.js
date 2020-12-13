const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserViewSchema = new Schema({
  user            : { type: ObjectId, ref:"user", default: null },
  product         : { type: ObjectId, ref:"product", default: null },
  viewDate        : { type: Date, default: null },
  isDeleted       : { type: Boolean, default: false },
},
{
  timestamps: true,
});

module.exports = mongoose.model('userView', UserViewSchema, 'userViews');
