import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  profilePicSrc: {
    type: String,
    default:
      "",
  },
  profilePicKey: {
    type:String,
    default : null
  },
  message: {
      type: String,
      required: true
  },
  ipOrigin: {
    type: String,
    required: true
  }
  // target: {
  //     type: String,
  //     required: true,
  //     default: "anyone"
  // }
});

const Message = mongoose.model("Message", messageSchema)

export default Message
