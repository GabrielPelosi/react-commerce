import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

type NavParam = {
    cartMenuState: Boolean,
    setCartMenuState: Function,
    productItemCount: number,
}


const Navbar = ({cartMenuState, setCartMenuState,productItemCount}: NavParam) => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-logo">
                    <img  src="https://cdn0.iconfinder.com/data/icons/shopping-icons-rounded/110/Online-Shopping-512.png" alt="" />
                </div>
                <div className="nav-items">
                    <ul>
                        <Link style={{textDecoration: "none", color: "black"}} to="/favoritos"><li>Favoritos</li></Link>
                        <Link style={{textDecoration: "none", color: "black"}} to="/historico"><li>Historico</li></Link>
                    </ul>
                </div>
                <div className="cart-container">
                    <img onClick={() => setCartMenuState(!cartMenuState)} src="https://image.flaticon.com/icons/png/512/263/263142.png" className="cart-btn" alt=""/>
                    <span className="cart-container-counter">{productItemCount}</span>
                </div>
            </nav>
        </>
    )
}

export default Navbar
