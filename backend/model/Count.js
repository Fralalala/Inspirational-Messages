import mongoose from "mongoose"

const countSchema = mongoose.Schema({
    messageCount : {
        required: true,
        default: 0
    }
})

const Count = mongoose.model("Count", countSchema)

export default Count