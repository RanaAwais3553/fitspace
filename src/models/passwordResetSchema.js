
import mongoose, { Schema } from "mongoose";


const passwordResetSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    token: {
        type: String || undefined,
        default:null
    },
    created_at: {
        type: String || undefined,
        default: null
    }
    
},
    {
        timestamps: true,
    });

export default mongoose.model('PasswordReset', passwordResetSchema);