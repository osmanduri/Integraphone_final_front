import React from 'react'
import home_phone from '../images/Home/phone-call.png'
export default function PhoneCall() {
    return (
        <div className="home_phone">      
            <a href="tel:+33970755252"><img src={home_phone} alt="home_phone"/></a>
        </div>
    )
}
