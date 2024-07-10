import mongoose from "mongoose";

const paymentSchedulerSchema = new mongoose.Schema({
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
    },
    status: {
        type: String,
        default: 0
    },
    schedule_at: {
        type: Date
    },
    created_at: {
        type: Date
    }

});
export default mongoose.model("paymentScheduler", paymentSchedulerSchema);
