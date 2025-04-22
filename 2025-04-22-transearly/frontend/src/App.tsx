import { useSearchParams } from 'react-router-dom';
import './App.css'
import { useEffect, useState } from 'react';

function App() {

    const [searchParams] = useSearchParams(); 
    const [jwt, setJwt] = useState<string>('')

    useEffect(() => {
        if(searchParams.get('jwt')) {
            setJwt(searchParams.get('jwt')!)
        }
    }, [searchParams])

  return (
    <>
        {!jwt && <p>
            <a href="http://localhost:3000/dropbox/auth">Login</a>
            </p>}
        

        {jwt && <p>
            <button>subscribe</button>
        </p>}
    </>
  )
}

export default App
