import mongoose from "mongoose";
import {  Schema } from "mongoose";

let startupSchema = new Schema({
  date: {
    type: String,
  },
  startupName: {
    type: String,
  },
  industryVertical: {
    type: String,
  },
  subVertical: {
    type: String,
  },
  cityLocation: {
    type: String,
  },
  investorsName: {
    type: String,
  },
  investmentType: {
    type: String,
  },
  amountInUSD: {
    type: String,
    required: false,
  },
  remarks: {
    type: String,
    required: false,
  },
});

export let startup = mongoose.model("startup", startupSchema);
