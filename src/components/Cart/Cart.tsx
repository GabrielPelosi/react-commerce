import React from 'react'
import './Cart.scss'
import { CartProduct } from '../../types/CartProduct'
import CartItem from './CartItem/CartItem'
import { Link } from 'react-router-dom'

type CartParams = {
    cartMenuState: Boolean
    cartItems: CartProduct[],
    setCartItems: Function,
    setProductItemCount: Function,
}



const Cart = ({ cartMenuState, cartItems, setCartItems, setProductItemCount }: CartParams) => {

    const clearCart = () => {
        setCartItems([])
        localStorage.removeItem('cart-items-lenght')
        setProductItemCount(0)
        localStorage.removeItem('cart-items')
    }
    return (
        <>
            <div className={"user-cart-dropmenu " + (cartMenuState && "active")}>
                <div className="added-cart-items-title">
                    <h3>Produtos do carrinho!</h3>
                </div>
                <div className="cart-buttons">
                    <Link to={{
                        pathname: "/order",
                        state: {
                            cartItems
                        }
                    }} style={{ textDecoration: 'none', color: 'black' }}>
                        <button>Finalizar compra </button>
                    </Link>
                    <button onClick={() => clearCart()}>Limpar carrinho</button>
                </div>

                <div className="added-cart-items-container">
                    {
                        cartItems.map(cartItem => (
                            <CartItem 
                                product={cartItem.product}
                                quantity={cartItem.quantity}
                                cartItems={cartItems} setCartItems={setCartItems} />
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Cart
