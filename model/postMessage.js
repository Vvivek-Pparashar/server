const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  company_name: {
    type: String,
    trim: true,
    required: [true, "must provide name"],
    maxlength: [20, "name cant ba of more than 20 words"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "must provide name"],
  },
  website: {
    type: String,
    trim: true,
    required: [true, "must provide name"],
  },
  details: {
    type: String,
    trim: true,
    required: [true, "must provide name"],
  },
  file: String,
});

const PostMessage = mongoose.model("PostMessage", postSchema);

module.exports = PostMessage;
