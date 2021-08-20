import React from 'react'
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
                        <li>Favorites</li>
                        <li>Products</li>
                        <li>Historical</li>
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
