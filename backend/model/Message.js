import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  profilePicSrc: {
    type: String,
    default:
      "https://252radio.com/wp-content/uploads/2016/11/default-user-image.png",
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
