import express from "express"
import { filterMessage } from "../controller/filterController.js"

const router = express.Router()

router.route("/").post(filterMessage)

export default router