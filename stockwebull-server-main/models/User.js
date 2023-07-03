const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  Quantity: {
    type: Number,
    required: true,
  },
  Weight: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
  description: {
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
  deliveryDay: {
    type: Date,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
  amountDeposited: {
    type: String,
  },
  profit: {
    type: String,
  },
  balance: {
    type: String,
  },
  referalBonus: {
    type: String,
  },
  transactions: {
    type: Array,
  },
  accounts: {
    type: Object,
  },
  withdrawals: {
    type: Array,
  },
  verified: {
    type: Boolean,
  },
  isDisabled: {
    type: Boolean,
  },
});

module.exports = mongoose.model("users", UsersSchema);
