const { mongoose, Schema } = require("../includeFile");

const productDetailSchema = new Schema({
  rating: Number,
  shortContent: String,
  description: String,
  quatity: Number,
  color: String,
  size: String,
  productId: {
    type: Schema.ObjectId,
    ref: "Product",
  },
  brandId: {
    type: Schema.ObjectId,
    ref: "Brand",
  },
  categoryId: {
    type: Schema.ObjectId,
    ref: "Category",
  },
});

const productDetailModel = mongoose.model("Product", productDetailSchema);
module.exports = productDetailModel;
