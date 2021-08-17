import React from 'react'
import './Cart.scss'

type CartParams = {
    cartMenuState: Boolean
}

const Cart = ({cartMenuState}: CartParams) => {
    //Map para cart items
    return (
        <>
            <div className={"user-cart-dropmenu " + (cartMenuState && "active")}>
                <div className="added-cart-items-title">
                <p>fmdskfds</p>
                <h4>kjndjkfndsjk</h4>
                </div>
                <div className="added-cart-items-container">
                <p>423423</p>
                <h4>7908908</h4>
                </div>
                
            </div>
        </>
    )
}

export default Cart
