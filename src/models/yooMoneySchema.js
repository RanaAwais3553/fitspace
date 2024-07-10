import mongoose from "mongoose";

const yooMoneySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    payment_id: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
        
    }
});
export default mongoose.model("yooMoney", yooMoneySchema);
