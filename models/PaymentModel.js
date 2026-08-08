import mongoose, { Schema } from "mongoose";

const PaymentSchema = new Schema({

    name: { type: String, required: true },
    message: { type: String },
    amount: { type: Number, required: true },
    id: { type: String, required: true },
    done: { type: Boolean, default: false },

}, { timestamps: true })

const Payment = mongoose.models.Payment || mongoose.model("Payment", PaymentSchema)
export default Payment;