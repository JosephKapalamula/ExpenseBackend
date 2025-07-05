import mongoose from "mongoose";
const reportSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    totalExpenses: {
        type: Number,
        default: 0
    },
    totalBudget: {
        type: Number,
        default: 0
    }
});


const Report = mongoose.model("Report", reportSchema);
export default Report;