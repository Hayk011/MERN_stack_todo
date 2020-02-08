const { Schema, model } = require("mongoose");
const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  condidate: {
    type: Boolean,
    default: false
  }
});
module.exports = model("todo", schema);
