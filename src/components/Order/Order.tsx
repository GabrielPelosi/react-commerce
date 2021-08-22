import React, { useState, useEffect } from 'react'
import { CartProduct } from '../../types/CartProduct'


type OrderParams = {
    cartItems: CartProduct[],
}
const Order = ({ cartItems }: OrderParams) => {

    return (typeof cartItems !== 'undefined' && cartItems.length > 0) ? (
        <div>
            {
                cartItems.map(cartItem => (
                    <div>
                        <h1>{cartItem.product.name}</h1>
                        <h2>{cartItem.product.description}</h2>
                        <h3>{cartItem.product.price}</h3>
                    </div>

                ))
            }
        </div>
    ) : (
        <div>
            <h1>Carrinho vazio ;(</h1>
        </div>
    )
}

export default Order
