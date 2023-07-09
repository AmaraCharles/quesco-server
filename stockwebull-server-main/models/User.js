const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  etd: {
    type: string,
    required: true,
  },
  date: {
    type: string,
    required: true,
  },
  
  eta: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
  
  totalFreight: {
    type: String,
    required: true,
  },
  paymentMode: {
    type: String,
    required: true,
  },
 
  receiverName: {
    type: String,
    required: true,
  },
  receiverEmail: {
    type: String,
    required: true,
  },
  receiverAddress: {
    type: String,
    required: true,
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
