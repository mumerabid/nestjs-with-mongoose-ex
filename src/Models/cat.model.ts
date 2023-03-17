import * as mongoose from 'mongoose';
export const CatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  breed: {
    type: String,
    default: null,
  },
});
