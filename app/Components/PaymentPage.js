"use client"
import React, { useState } from 'react'
import Script from 'next/script'
import { initiate } from '@/app/actions/useractions'
import { useSession } from 'next-auth/react'

const PaymentPage = ({ username }) => {
    const [paymentform, setPaymentform] = useState({})
    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }
    const pay = async (amount) => {
        let a = await initiate(amount,username, paymentform)
        let orderId = a.id
        var options = {
            "key": "process.env.NEXT_PUBLIC_KEY_ID", // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Get Me A Chai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": "orderId", // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();

    }

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className="cover flex bg-red-400 relative">
                <img className="object-cover w-full h-96" src="https://c14.patreon.com/Hero_Image_1094f5efa6.png" alt="" />
                <div className=' absolute -bottom-20 right-[44%]'>
                    <img className='rounded-full border-white border-2' src="https://cdn.pixabay.com/photo/2024/06/06/20/06/singer-8813370_1280.png" width="150" height="150"></img>
                </div>
            </div>
            <div className="info  flex flex-col justify-center items-center py-20 my-2 gap-2">
                <div className="font-bold text-lg">@{username}</div>
                <div>
                    Independent Artist in USA- United State
                </div>
                <div className="">
                    12.1K member | 123 posts | $19 | 450-release
                </div>
                <div className="payment flex mt-24 gap-3 w-[80%]">
                    <div className="supporters w-1/2 bg-slate-900 rounded-lg p-10">
                        <h2 className=' text-2xl font-bold'>Supporters</h2>
                        <ul className='mx-5 text-lg'>
                            <li className='my-4 flex gap-2 items-center'>
                                <img width={33} src="wired-lineal-21-avatar-hover-jumping.gif" alt="use avater" />
                                <span>Shubham donated <span className='font-bold'> $12 </span>with a message "I support You bro.Lots of 💕"</span>
                            </li>
                            <li className='my-4 flex gap-2 items-center'>
                                <img width={33} src="wired-lineal-21-avatar-hover-jumping.gif" alt="use avater" />
                                <span>Shubham donated <span className='font-bold'> $12 </span>with a message "I support You bro.Lots of 💕"</span>
                            </li>
                            <li className='my-4 flex gap-2 items-center'>
                                <img width={33} src="wired-lineal-21-avatar-hover-jumping.gif" alt="use avater" />
                                <span>Shubham donated <span className='font-bold'> $12 </span>with a message "I support You bro.Lots of 💕"</span>
                            </li>
                            <li className='my-4 flex gap-2 items-center'>
                                <img width={33} src="wired-lineal-21-avatar-hover-jumping.gif" alt="use avater" />
                                <span>Shubham donated <span className='font-bold'> $12 </span>with a message "I support You bro.Lots of 💕"</span>
                            </li>
                            <li className='my-4 flex gap-2 items-center'>
                                <img width={33} src="wired-lineal-21-avatar-hover-jumping.gif" alt="use avater" />
                                <span>Shubham donated <span className='font-bold'> $12 </span>with a message "I support You bro.Lots of 💕"</span>
                            </li>
                            <li className='my-4 flex gap-2 items-center'>
                                <img width={33} src="wired-lineal-21-avatar-hover-jumping.gif" alt="use avater" />
                                <span>Shubham donated <span className='font-bold'> $12 </span>with a message "I support You bro.Lots of 💕"</span>
                            </li>

                        </ul>
                    </div>
                    <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10">
                        <h2 className=' text-2xl font-bold my-2'>Make a Payment</h2>
                        <div className="flex flex-col gap-2">
                            <input onChange={handleChange} value={paymentform.mame} name='name' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
                            <input onChange={handleChange} value={paymentform.message} name='message' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
                            <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
                            <button className=" w-fit relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" >
                                <span className="relative px-1.5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                    Pay
                                </span>
                            </button>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(3000)}>Pay ₹30</button>
                            <button className='bg-slate-800 p-3 rounded-lg' onClick={() => pay(5000)}>Pay ₹50</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
