import React from 'react'
import './Home.css'
import * as ReactBootStrap from 'react-bootstrap'
const Home = () => {
    return (
        <>
            <h1 className='head1'><b>IEEE JU</b></h1>
            <p className='para1'><i>presents</i></p>
            <img className='img1' src="https://ieee-jaduniv.in/mla/img/car.png" alt="LOGO"/>
            <h4 className='name1'>Machine Learning Accelerator Summit 2020</h4>
            <h3 className='year1'><b>2020-2021</b></h3>
            <h2 className='clg1'>Jadavpur University, Kolkata</h2>
            <ReactBootStrap.Button variant="success" size="lg" className='button'>REGISTER</ReactBootStrap.Button>{' '}
        </>
    )
}
export default Home