import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51KjGJELpQISSozLlmvVcY6I4pXO2Kdld3I7nkf2Smz53FqNoO646OywqRzOrKDEq0Gc9Lb3IicsDe9mPNdyKJs4L00XlLtXsLU"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
