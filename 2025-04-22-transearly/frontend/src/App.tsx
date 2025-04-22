import { useSearchParams } from 'react-router-dom';
import './App.css'
import { ReactEventHandler, useEffect, useState } from 'react';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


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
      const res = await fetch('/create-intent', {
        method: 'POST',
      });
  
      const {client_secret: clientSecret} = await res.json();
  
      const {error} = await stripe!.confirmPayment({
        //`Elements` instance that was used to create the Payment Element
        elements,
        clientSecret,
        confirmParams: {
          return_url: 'https://example.com/order/123/complete',
        },
      });
  
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

    useEffect(() => {
        if(searchParams.get('jwt')) {
            setJwt(searchParams.get('jwt')!)
        }
    }, [searchParams])

    // const options = {
    //     mode: 'payment',
    //     amount: 1099,
    //     currency: 'usd',
    //     // Fully customizable with appearance API.
    //     appearance: {
    //       /*...*/
    //     },
    //   };

  return (
    <>
        {!jwt && <p>
            <a href="http://localhost:3000/dropbox/auth">Login</a>
            </p>}
        

        {jwt && <>
            <Elements stripe={stripePromise} options={{mode: 'payment', amount: 100, currency: 'usd'}}>
                <CheckoutForm />
            </Elements>

        </>}
    </>
  )
}

export default App
