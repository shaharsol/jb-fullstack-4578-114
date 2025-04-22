import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './App.css';
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
  
    const [errorMessage, setErrorMessage] = useState<string>('');
  
    const handleSubmit = async (event: {preventDefault: Function}) => {
      event.preventDefault();
  
      if (elements == null) {
        return;
      }
  
      // Trigger form validation and wallet collection
      const {error: submitError} = await elements.submit();
      if (submitError) {
        // Show error to your customer
        setErrorMessage(submitError.message!);
        return;
      }
  
      // Create the PaymentIntent and obtain clientSecret from your server endpoint
      const res = await axios.post('http://localhost:3000/stripe/payment-intent');
  
      const {paymentIntent} = await res.data;
  
      const {error} = await stripe!.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        clientSecret: paymentIntent.client_secret,
        confirmParams: {
          return_url: 'http://localhost:5173/payment-complete',
        },
      });
      if (error) {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Show error to your customer (for example, payment
        // details incomplete)
        setErrorMessage(error.message!);
      } 
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button type="submit" disabled={!stripe || !elements}>
          Pay
        </button>
        {/* Show error message to your customers */}
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    );
  };
  
  



function App() {
    const stripePromise = loadStripe('pk_test_51MfOVTCMizDvBNeK8KuggydLpRzahq6hbeEgxYaWtEB1H3HtgdMz7loAT2tsbEujGARuDn8Reu1ewHxp1HoSqqpL00nMPTyJwQ');

    const [searchParams] = useSearchParams(); 
    const [jwt, setJwt] = useState<string>('')
    const [isPaying, setIsPaying] = useState<boolean>(false)

    useEffect(() => {
        if (localStorage.getItem('jwt')) {
            setJwt(localStorage.getItem('jwt')!)
        }
    }, 
        
    [])

    useEffect(() => {
        if(searchParams.get('jwt')) {
            localStorage.setItem('jwt', searchParams.get('jwt')!)
            setJwt(searchParams.get('jwt')!)
        }

        if(searchParams.get('payment_intent')) {
            (async () => {
                if(jwt) {
                    const decoded = jwtDecode(jwt) as any
                    console.log(decoded)
                    await axios.post(`http://localhost:3000/stripe/update-user-payment-intent/${decoded.id}/${searchParams.get('payment_intent')}`)
                    setIsPaying(true)
                }
            })()
        }
        
    }, [searchParams])


  return (
    <>
        {!jwt && <p>
            <a href="http://localhost:3000/dropbox/auth">Login</a>
            </p>}
        

        {jwt && !isPaying && <>
            <Elements stripe={stripePromise} options={{mode: 'payment', amount: 100, currency: 'usd'}}>
                <CheckoutForm />
            </Elements>

        </>}

        {jwt && isPaying && <>
            <p>u can now use the app...</p>
        </>}
    </>
  )
}


export default App
