import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4000/payment", {
                amount: 10000,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
        <form onSubmit={handleSubmit}>
            <h1>"GIVE ME YOUR MONEY"</h1>
            <br></br>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button className="colorbutton">Pay</button>
        </form>
        :
        <div>
            <h2> "CONGRATS THIS IS THE BEST DECISION OF YOU'RE LIFE"</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xTMqbezhXMs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h2>CONGRATULATION WE MADE IT NOW</h2>
            <h2>10 THOUSANDS HOURS OF CODING ALL NIGHT LONG</h2>
            <h2>CONGRATULATION WE SHOUT IT OUT</h2>
            <h2>LET’S  GET THAT BILLION JOB FEELING LIKE A BOSS</h2>
            <br></br>
            <h2>SHOUT OUT TO HEIDI JAVA STACK MAKE IT SO EASY</h2>
            <h2>9 AM DAILY  BINARY TREE GOT ME CRAZY </h2>
            <h2>LET’S ME ASK JOHNNY CONSOLE LOG ERROR X Y Z</h2>
            <h2>JAVA SCRIPT MAKE ME SO DIZZY</h2>
            <h2>IT’S 6PM WE STILL GOT EMILY</h2>
            <h2>SHOUTOUT TO THE ALGO KING LEVI OR WASEEM</h2>
            <h2>BENNETT ARTHUR ADAM’S CHAT FULL STACK MVP</h2>
            <h2>MERN CHECKED PYTHON CHECKED EVERYTHING THAT YOU NEED</h2>
            <h2>MILLION CHECKS BILLION CHECKS YEAH JUST GIVE ME THAT </h2>
        </div> 
        }
            
        </>
    )
}
