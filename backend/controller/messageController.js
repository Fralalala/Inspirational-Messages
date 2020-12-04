import Message from "../model/Message.js";

const addMessage = async (req, res) => {
  try {
    const { name, message } = req.body;

    let newMessage;

    if (req.file) {
      newMessage = await Message.create({
        name,
        profilePicSrc: req.file.location,
        profilePicKey: req.file.key,
        message,
      });
    } else {
      newMessage = await Message.create({
        name,
        message,
      });
    }

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
    let randomUser;

    await Message.countDocuments().exec((err, count) => {
      var random = Math.floor(Math.random() * count);

      Message.findOne()
        .skip(random)
        .exec((error, result) => {
          if (error) {
            res.status(400);
            throw new Error("Error finding result");
          }

          if(result === null) {
            res.json({
              msg: "There's no more messages :/ "
            })
          }

        });
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

export { addMessage, getMessage };
