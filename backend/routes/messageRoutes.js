import express from "express";
import { addMessage, getMessage } from "../controller/messageController.js";
import { filter } from "../middleware/filterMiddleware.js";
import { uploadObject } from "../middleware/s3Middleware.js";

const router = express.Router();

// api/message
router.route("/").post(filter, uploadObject, addMessage).get(getMessage);

export default router;
