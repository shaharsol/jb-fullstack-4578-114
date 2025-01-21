import { BrowserRouter } from 'react-router-dom'
import Layout from '../layout/layout/Layout'
import './App.css'
import { Provider } from 'react-redux'
import store from '../../redux/store'

export default function App(): JSX.Element {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Layout />
                </Provider>
            </BrowserRouter>
        </div>
    )
}