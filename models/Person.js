const mongoose = require("mongoose");
const personSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        default: "adem" },
    age: { 
        type: Number, 
        required: true, 
        default: 2 },
    favoriteFoods: { 
        type: [String], 
        default: ["frites"] },
  })

  module.exports = mongoose.model("person", personSchema);