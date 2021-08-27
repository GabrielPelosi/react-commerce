import { useState } from 'react'
import React from 'react'
import './Product.scss';
import { FavoriteBorder, ControlPoint, RemoveCircleOutline } from '@material-ui/icons';
import { CartProduct } from './../../../types/CartProduct'
import { ProductType } from './../../../types/Product'



type ProdParam = {
    productObj: ProductType,
    cartItems: CartProduct[],
    setCartItems: Function,
    setCartMenuState: Function,
    setPopuponError: Function,
    setProductItemCount: Function,
    productItemCount: number,
}

const Product = ({ productObj, cartItems, setCartItems, setCartMenuState, setPopuponError,setProductItemCount,productItemCount }: ProdParam) => {

    const [productQuantity, setProductQuantity] = useState<number>(0);

    const addProdToCartMemoty = () => {
        setCartMenuState(false)
        if (productQuantity > 0) {
            const cartItem: CartProduct = {
                product: productObj,
                quantity: productQuantity,
            }
            if (cartItems.some(item => item.product.id === productObj.id)) {
                var index = cartItems.findIndex(item => item.product.id === productObj.id)
                var cartItemQuantity = cartItems[index].quantity
                if (cartItemQuantity + productQuantity <= 10) {
                    cartItems[index].quantity = productQuantity + cartItemQuantity
                    setProductItemCount(productItemCount + productQuantity)
                    localStorage.setItem('cart-items-lenght', JSON.stringify(productItemCount + productQuantity))
                    setCartItems(cartItems)
                    localStorage.setItem('cart-items', JSON.stringify(cartItems))
                }else{
                    setPopuponError(true)
                }
            } else {
                setProductItemCount(productItemCount + productQuantity)
                localStorage.setItem('cart-items-lenght', JSON.stringify(productItemCount + productQuantity))
                cartItems.push(cartItem)
                setCartItems(cartItems)
                localStorage.setItem('cart-items', JSON.stringify(cartItems))
            }
        }else{
            setPopuponError(true)
        }
    }

    return (
        <>
            <div className="product-card">
                <div className="product-img">
                    <img src={productObj.img} alt=""/>
                </div>
                <div className="product-detail">
                    <span className="price" > R$ {productObj.price}</span>
                    <span>{productObj.name}</span>
                    <p>{productObj.description}</p>

                    <div className="buttons">

                        <div className="qnt-input-container">
                            <span className="qnt-title">Quantidade</span>
                            <ControlPoint onClick={() => productQuantity >= 10 ? setProductQuantity(10) : setProductQuantity((productQuantity + 1))} style={{ fontSize: 20, color: "#fff", margin: "5px", cursor: "pointer" }} />
                            <input type="number" value={productQuantity} min="0" max="10"
                                onChange={(event: any) => {
                                    if (event.target.value.lenght > 1) {
                                        alert('eero')
                                    } else {
                                        setProductQuantity(event.target.value);
                                    }

                                }}
                            />
                            <RemoveCircleOutline onClick={() => productQuantity <= 0 ? setProductQuantity(0) : setProductQuantity((productQuantity - 1))} style={{ fontSize: 20, color: "#fff", margin: "5px", marginTop: "5px", cursor: "pointer" }} />

                        </div>

                    </div>
                    <div className="buttons">
                        <button onClick={() => addProdToCartMemoty()} className="btn cart">Add to cart</button>
                        <button onClick={() => alert('added to fav')} className="btn bookmark"><FavoriteBorder style={{ fontSize: 20 }} /></button>

                    </div>
                </div>

            </div>
            
        </>
    )
}

export default Product
