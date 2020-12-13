const mongoose = require('mongoose');

const APIError = require('../utils/APIError');
const { removeFields } = require('../utils/helper');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name            : { type: String, require: true },
  email           : { type: String, required: true, unique: true },
  password        : { type: String, default: null },
  isDeleted       : { type: Boolean, default: false },
},
{
  timestamps: true,
});

/**
*  Check email is unique or not
*/
UserSchema.pre(/^save$/, true, async function (next, done) {
  try{
    const self = this;
    const record = await mongoose.models['user'].findOne({ _id: { $ne: self._id }, email: self.email, isDeleted: false });
    record ? done(new APIError({status: 409, message: `"email" already exists`})) : done();
    next();
  }
  catch (err) { done(err); next(); }
});


module.exports = mongoose.model('user', UserSchema, 'users');
