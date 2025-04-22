import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe('pk_test_51MfOVTCMizDvBNeK8KuggydLpRzahq6hbeEgxYaWtEB1H3HtgdMz7loAT2tsbEujGARuDn8Reu1ewHxp1HoSqqpL00nMPTyJwQ');


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </StrictMode>,
)
