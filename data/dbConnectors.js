import mongoose, { mongo } from "mongoose";

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/friends");

const friendSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  age: {
    type: Number
  },
  language: {
    type: String
  },
  email: {
    type: String
  },
  contacts: {
    type: Array
  }
});

export const Friends = mongoose.model("friends", friendSchema);
