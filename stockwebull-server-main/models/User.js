const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  etd: {
    type: Number,
    required: false,
  },
  eta: {
    type: String,
    required: false,
  },
  destination: {
    type: String,
    required: false,
  },
  totalFreight: {
    type: String,
    required: false,
  },
  paymentMode: {
    type: String,
    required: false,
  },
 
  receiverName: {
    type: String,
    required: false,
  },
  receiverEmail: {
    type: String,
    required: false,
  },
  receiverAddress: {
    type: String,
    required: false,
  },
  deliveryDay: {
    type: String,
    required: false,
  },

  senderName: {
    type: String,
    required: false,
  },
  senderEmail: {
    type: String,
    required: false,
  },
 
 
    location: {
    type: String,
    required: false,
  },
  itemType: {
    type: String,
    required: false,
     },
  weight: {
    type: String,
  },
  mot: {
    type: String,
  },
  consignmentDetails: {
    type: String,
  },
  
  history: {
    type: Array,
  },
  
});

module.exports = mongoose.model("users", UsersSchema);
