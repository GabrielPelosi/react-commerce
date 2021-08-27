import React from 'react'
import { ProductType } from '../../../types/Product'
import { CartProduct } from '../../../types/CartProduct'
import './CartItem.scss'
import {HighlightOff} from '@material-ui/icons';

type CartItemParam = {
    product: ProductType,
    quantity: number,
    cartItems: CartProduct[],
    setCartItems: Function
}

const CartItem = ({ product, quantity,cartItems,setCartItems }: CartItemParam) => {
    
    
    return (
        <>
            <div className="card-cart-item">
            
                <div className="card-cart-item-image">
                    <img src={product.img}
                        alt="" />
                </div>
                
                <div className="card-cart-items-details">
                    
                    <span onClick={() => console.log(product.id)} className="card-qnt-label">Quantidade: </span> 
                    <span className="card-qnt-value">{quantity}  </span> 
                    
                    
                    <span className="card-total">Preço total:  {(product.price * quantity)}</span>
                </div>
                <HighlightOff onClick={() => setCartItems(cartItems.filter((item) => item.product.id !== product.id))} style={{margin: "5px", cursor: "pointer"}}/>
            </div>
        </>
    )
}

export default CartItem
