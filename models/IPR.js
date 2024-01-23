const { Schema, model } = require("mongoose");

const IPRSchema = new Schema({
  iprNum: {
    type: Number,
    required: true,
  },
  vendorAddress: {
    type: String,

    default: "",
  },
  vendorNumber: {
    type: String,
  },
  accountInfo: {
    fund: {
      type: Number,
      required: true,
    },
    departmentNum: {
      type: String,
      required: true,
    },
    budRef: {
      type: Number,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
  },
  shipTo: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    required: true,
    default: [],
  },
  approvers: {
    type: Array,
    required: true,
    default: [],
  },
});

module.exports = model("IPR", IPRSchema);
