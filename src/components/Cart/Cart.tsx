import React from 'react'
import './Cart.scss'
import { ProductType } from '../../types/Product'
import { CartProduct } from '../../types/CartProduct'
import CartItem from './CartItem/CartItem'

type CartParams = {
    cartMenuState: Boolean
    cartItems: CartProduct[],
    setCartItems: Function
}



const Cart = ({ cartMenuState, cartItems, setCartItems }: CartParams) => {

    return (
        <>
            <div className={"user-cart-dropmenu " + (cartMenuState && "active")}>
                <div className="added-cart-items-title">
                    <h3>Produtos do carrinho!</h3>
                </div>
                <div className="cart-buttons">
                    <button>Finalizar compra</button>
                    <button onClick={() => setCartItems([])}>Limpar carrinho</button>
                </div>

                <div className="added-cart-items-container">
                    {
                        cartItems.map(cartItem => (
                            <CartItem id={cartItem.product.id}
                                name={cartItem.product.name}
                                price={cartItem.product.price}
                                description={cartItem.product.description}
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
