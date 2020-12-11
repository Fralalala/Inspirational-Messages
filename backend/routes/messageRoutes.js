import express from "express";
import { addMessage, getMessage } from "../controller/messageController.js";
import { filter } from "../middleware/filterMiddleware.js";
import { uploadObject } from "../middleware/s3Middleware.js";
import Count from "../model/Count.js"

const router = express.Router();

// api/message
router.route("/").post(filter, uploadObject, addMessage).get(getMessage);

router.route("/count").get(async (req,res) => {
    const obj = await Count.findOne({})

    res.json({
        count: obj.messageCount
    })
})

export default router;
