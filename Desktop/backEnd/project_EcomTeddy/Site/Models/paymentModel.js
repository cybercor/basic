const { mongoose, Schema } = require("../includeFile");

const paymentSchema = new Schema({
  totalPrice: Number,
  paymentDelivery: Number,
  paymentCard: Number,
  note: String,
  address: String,
  customerId: {
    type: Schema.ObjectId,
    ref: "Customer",
  },
});

const paymentModel = mongoose.model("Payment", paymentSchema);
module.exports = paymentModel;
