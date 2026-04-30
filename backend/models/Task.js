const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title:String,
  status:{type:String, default:"Pending"}
});

module.exports = mongoose.model("Task", schema);