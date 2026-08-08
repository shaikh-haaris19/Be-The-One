"use server"

import Razorpay from "razorpay"
import PaymentModel from "@/models/PaymentModel"
import connectDB from "@/connectDB/db"

export const initiatePayment = async (paymentForm) => {

    await connectDB()

    const RazorPayInstance = new Razorpay({
        key_id: process.env.NEXT_PUBLIC_RAZORPAY_ID,
        key_secret: process.env.RAZORPAY_SECRET,
    });

    let options = {
        amount: paymentForm.amount * 100,  // Amount is in currency subunits. 
        currency: "INR",
    };

    let initiate = await RazorPayInstance.orders.create(options);

    //Create Pending Payment Object In DB
    await PaymentModel.create({
        name: paymentForm.name,
        message: paymentForm.message,
        amount: paymentForm.amount,
        id: initiate.id
    })

    return initiate

}