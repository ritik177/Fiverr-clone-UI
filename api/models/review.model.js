import mongoose from "mongoose";
const { Schema } = mongoose;

const ReviewSchema = new Schema(
    {
        gigId: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        star: {
            type: Number,
            required: true,
            enum: [1, 2, 3, 4, 5]// if we enter number like 10 then it give error so we use  number between 1 to 5 only.
        },
        desc: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Review", ReviewSchema);