import { deleteObject } from "../middleware/s3Middleware.js";
import Count from "../model/Count.js";
import Message from "../model/Message.js";

const addMessage = async (req, res) => {
  try {
    const { iporigin } = req.headers;
    const { name, message } = req.body;

    let newMessage;

    //With Picture
    if (req.file) {
      newMessage = await Message.create({
        name,
        profilePicSrc: req.file.location,
        profilePicKey: req.file.key,
        message,
        ipOrigin: iporigin,
      });

      //Without Picture
    } else {
      newMessage = await Message.create({
        name,
        message,
        ipOrigin: iporigin,
      });
    }

    const temp = await Count.findOne({})

    const obj = await Count.findOneAndUpdate({}, {messageCount : temp.messageCount + 1 })

    if (newMessage) {
      res.json({
        name: newMessage.name,
        profilePicSrc: newMessage.profilePicSrc,
        profilePicKey: newMessage.profilePicKey,
        message: newMessage.message,
      });
    } else {
      res.status(400);
      throw new Error("Failed to create in database");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getMessage = async (req, res) => {
  try {
    const { ip } = req.headers;

    await Message.countDocuments({ ipOrigin: { $ne: ip } }).exec(
      (err, count) => {
        var random = Math.floor(Math.random() * count);

        Message.findOne({ ipOrigin: { $ne: ip } })
          .skip(random)
          .exec(async (error, result) => {
            if (error) {
              res.status(400);
              throw new Error("Error finding result");
            }
            
            if (result === null) {
              res.json({
                msg: "getFailed",
              });
            } else {
              await Message.findByIdAndDelete(result._id);

              if (result.profilePicKey !== null) {
                deleteObject(result.profilePicKey);
              }

              res.json({
                name: result.name,
                profilePicSrc: result.profilePicSrc,
                message: result.message,
                msg: "success",
              });
            }
          });
      }
    );
  } catch (error) {
    res.status(500).send(error);
  }
};

export { addMessage, getMessage };
