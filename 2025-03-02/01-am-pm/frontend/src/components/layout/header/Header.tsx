import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {

    return (
        <div className='Header'>
            <div>
                Logo
            </div>  
            <div>
                <nav>
                    <NavLink to="/products/list">list</NavLink>
                    <NavLink to="/products/add">add product</NavLink>
                </nav>
            </div>          
        </div>
    )
}