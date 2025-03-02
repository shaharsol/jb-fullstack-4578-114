import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import useUsername from '../../../hooks/useUsername'
import { useContext } from 'react'
import { AuthContext } from '../../auth/auth/Auth'

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