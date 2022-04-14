import React from 'react'
import StripeContainer from '../components/StripeContainer';
import pika from "../assets/pika.png"
import { useState } from 'react';
import { Link } from "react-router-dom"
import cd from "../assets/cd.png"

const Dashboard = () => {

    const [showItem, setShowItem] = useState(false);

    return (
        <div>
            {showItem ? (
                <StripeContainer />
            ) : (
                <>
                    <img style={{ height: '350px' }} src={cd} alt='pika' />
                    <h1 >
                        <Link className= 'default def' style={{textDecoration: 'none' }} to="/"> CODING DOJO FREESTYLE</Link>
                    </h1>
                    <h1 >
                        <Link className= 'default def' style={{textDecoration: 'none' }} to="/"> $100</Link>
                    </h1>
                    <h1 >
                        <Link className= 'default def' style={{textDecoration: 'none' }} to="/info"> INFO</Link>
                    </h1>
                    <h1 >
                        <Link className= 'default def' style={{textDecoration: 'none' }} to="/term">FAQ T&C</Link>
                    </h1>
                    <button className='thebutton default' onClick={() => setShowItem(true)}>PURCHASE</button>
                    <div><h1>
                    <label>EMAIL</label>
                    <div>

                    <input></input>
                    </div>

                    </h1></div>
                    <h1 >
                        <Link className= 'default def' style={{textDecoration: 'none' }} to="/">SUBSCRIBE</Link>
                    </h1>
                </>
            )}
        </div>
    )
}

export default Dashboard