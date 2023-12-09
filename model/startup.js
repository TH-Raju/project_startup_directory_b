import mongoose from "mongoose";
import {  Schema } from "mongoose";

let startupSchema = new Schema({
  Date: {
    type: String,
  },
  StartupName: {
    type: String,
  },
  IndustryVertical: {
    type: String,
  },
  SubVertical: {
    type: String,
  },
  CityLocation: {
    type: String,
  },
  InvestorsName: {
    type: String,
  },
  InvestmentType: {
    type: String,
  },
  AmountInUSD: {
    type: String,
    required: false,
  },
  Remarks: {
    type: String,
    required: false,
  },
});

export let startup = mongoose.model("startup", startupSchema);
