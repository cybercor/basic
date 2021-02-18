const { mongoose, Schema } = require("../includeFile");
const appError = require("../Utils/appError");
const bcrypt = require("bcrypt");

const customerSchema = new Schema({
  fullName: {
    type: String,
    unique: true, //duy nhất
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: Number,
  },
  address1: {
    type: String,
  },
});

customerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  return this.password;
});

//Ko tìm thấy this password
// customerSchema.pre("save", async function (next) {
//   if (!this.password) {
//     next(new appError(`${this.password} don't exist in database`, 404));
//   }
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// });

const customerModel = mongoose.model("Customer", customerSchema);
module.exports = customerModel;
