"use server"

import Razorpay from "razorpay"
import User from "@/app/models/User";
import Payment from "@/app/models/Payment";
import connectDB from '@/app/db/connectDb';

export const initiate = async (amount, to_user, paymentform) => {
    await connectDb()
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET })
    instance.orders.create({
        amount: 5000,
        currency: "INR",
        receipt: "receipt#1,",
        notes: {
            key1: "value3",
            key2: "value2"
        }
    })
    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    await Payment.create({
        oid: x.id, amount: amount, to_user: to_username,
        name: paymentform.name, message: paymentform.message
    })
    return x
}