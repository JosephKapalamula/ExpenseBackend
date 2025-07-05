import mongoose from "mongoose";
const budgetSschema=new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
        min: 0
    },

    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})
const Budget=mongoose.model("Budget", budgetSschema);
export default Budget;