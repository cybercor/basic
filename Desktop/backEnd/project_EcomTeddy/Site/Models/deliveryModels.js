const { mongoose, Schema } = require("../includeFile");
const appError = require("../Utils/appError");

const deliverySchema = new Schema({
  dateDelivery: {
    type: Date,
  },
  customerId: {
    type: Schema.ObjectId,
    ref: "Customer",
  },
  checkoutId: {
    type: Schema.ObjectId,
    ref: "Checkout",
  },
  productId: {
    type: Schema.ObjectId,
    ref: "Product",
  },
  productDetailId: {
    type: Schema.ObjectId,
    ref: "productDetail",
  },
});

module.exports = deliverySchema;
