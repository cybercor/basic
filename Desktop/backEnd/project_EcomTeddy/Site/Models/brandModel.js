const { mongoose, Schema } = require("../includeFile");

const categorySchema = new Schema({
  name: String,
});

const categoryModel = mongoose.model("Category", categorySchema);
module.exports = categoryModel;
