import React from 'react'
import PaymentPage from '@/app/models/Payment'


const Username = ({ params }) => {
    return (
        <>
            <PaymentPage username={params.username} />
        </>
    )
}

export default Username
