import React from 'react'
import { ProductType } from '../../../types/Product'
import { CartProduct } from '../../../types/CartProduct'
import './CartItem.scss'
import {HighlightOff} from '@material-ui/icons';

type CartItemParam = {
    id: number,
    name: string,
    price: number,
    description: string,
    quantity: number,
    cartItems: CartProduct[],
    setCartItems: Function
}

const CartItem = ({ id, name, price, description, quantity,cartItems,setCartItems }: CartItemParam) => {
    
    
    return (
        <>
            <div className="card-cart-item">
            
                <div className="card-cart-item-image">
                    <img src="https://cdn0.iconfinder.com/data/icons/shopping-icons-rounded/110/Online-Shopping-512.png"
                        alt="" />
                </div>
                
                <div className="card-cart-items-details">
                    
                    <span onClick={() => console.log(id)} className="card-qnt-label">Quantidade: </span> 
                    <span className="card-qnt-value">{quantity}  </span> 
                    
                    
                    <span className="card-total">Preço total:  {(price * quantity)}</span>
                </div>
                <HighlightOff onClick={() => setCartItems(cartItems.filter((item) => item.product.id !== id))} style={{margin: "5px", cursor: "pointer"}}/>
            </div>
        </>
    )
}

export default CartItem
