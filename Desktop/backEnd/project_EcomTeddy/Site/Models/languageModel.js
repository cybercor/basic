const { mongoose, Schema } = require("../includeFile");

const languageSchema = new Schema({
  name: String,
});

const languageModel = mongoose.model("Language", languageSchema);
module.exports = languageModel;
