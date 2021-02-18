const { mongoose, Schema } = require("../includeFile");

const reviewSchema = new Schema({
  rating: Number,
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  customerId: {
    type: Schema.ObjectId,
    ref: "Customer",
  },
});

const paymentModel = mongoose.model("Review", reviewSchema);
module.exports = paymentModel;
