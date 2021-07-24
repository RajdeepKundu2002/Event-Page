import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <div className='cont'>
            <ul className='contact'>
                <li>
                    <h3 className='heading'>ADDRESS</h3>
                    <p className='info'>188, Raja S.C. Mallick Rd, Kolkata-700032, India</p>
                </li>
                <li className='list'>
                    <h3 className='heading'>PHONE</h3>
                    <p className='info'>+919836105125</p>
                </li>
                <li>
                    <h3 className='heading'>EMAIL</h3>
                    <p className='info'>jaduniv.ieee@gmail.com</p>
                </li>
            </ul>
        </div>
    )
}
export default Contact