const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const appError = require("../Utils/appError");

const customerSchema = new Schema({
  fullName: {
    type: String,
    require: true,
    unique: true, //duy nhất
  },
  email: String,
  password: String,
  phone: Number,
});

const customerModel = mongoose.model("Customer", customerSchema);
module.exports = customerModel;
