import mongoose from "mongoose";

const countSchema = mongoose.Schema({
  messageCount: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Count = mongoose.model("Count", countSchema);

export default Count;
