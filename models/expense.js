import mongoose from "mongoose";


const expenseSchema=new mongoose.Schema({
    amount:{
        type: Number,
        required: true,
        min : 0

    },
    description:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    date: {
        type: Date,
        default: Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ["Food", "Transport", "Entertainment", "Utilities", "Other"]
    }

})

const Expense=mongoose.model("Expense",expenseSchema);
export default Expense;
