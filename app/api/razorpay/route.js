import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/PaymentModel";
import connectDB from "@/connectDB/db";

export const POST = async (req) => {

    await connectDB()

    let body = await req.formData();
    body = Object.fromEntries(body)

    let payment = await Payment.findOne({ id: body.razorpay_order_id })

    if (!payment) {
        return NextResponse.json({ success: false, message: "Some Error Occured!" })
    }

    //Validate Payment
    let verify = validatePaymentVerification({ order_id: body.razorpay_order_id, payment_id: body.razorpay_payment_id }, body.razorpay_signature, process.env.RAZORPAY_SECRET);

    //Upadate Status
    let paymentUpdate = await Payment.findOneAndUpdate({ id: body.razorpay_order_id }, { done: "true" }, { returnDocument: "after" })
    console.log(paymentUpdate)

    if (!paymentUpdate) {
        return NextResponse.json({ success: false, message: "Error Updating Payment" })
    }

    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${paymentUpdate.name}?orderId=${paymentUpdate.id}?paymentDone=true`)

}