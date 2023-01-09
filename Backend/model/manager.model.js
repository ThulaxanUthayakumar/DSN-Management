const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  managerName: {
    type: String,
    trim: true
  },
  bankName: {
    type: String,
    trim: true
  },
  bankGuranteeExpireDate: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  bankGuranteeCode: {
    type: String,
    trim: true
  },
  bankGuranteeAmount: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
});

module.exports = mongoose.model("Manager", productSchema);
