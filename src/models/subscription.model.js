import mongoose, { mongo, Schema } from "mongoose"

const subscriptionSchema = new Schema({     // _id comes automatically
    subscriber: {
        type: Schema.Types.ObjectId,        // one who is subscrber
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,        // one to whom 'subscriber' is subscribing
        ref: "User"
    }
})

export const Subscription = mongoose.model("Subscription", subscriptionSchema)