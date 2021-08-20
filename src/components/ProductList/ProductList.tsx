import React from 'react'
import { CartProduct } from '../../types/CartProduct'
import Product from './Product/Product'
import './ProductList.scss'
import { ProductType } from '../../types/Product'

type ProductParam = {
    cartItems: CartProduct[],
     setCartItems: Function,
     setCartMenuState: Function,
}

const ProductList = ({cartItems, setCartItems, setCartMenuState}: ProductParam) => {

    const products: ProductType[] = [{
        id: 1, name: "fdjfsd", description:"fnjsfbsd", price: 15.99
    },{
        id: 2, name: "54648", description:"fnjsfbsd", price: 12.50
    },{
        id: 3, name: "uiopymopi", description:"fnjsfbsd", price: 10
    },]
    return (
        <div className="product-container">
            {
                products.map(productObj => (
                    <Product productObj={productObj}
                    cartItems={cartItems} setCartItems={setCartItems}
                    setCartMenuState={setCartMenuState} />
                ))
            }

        </div>
    )
}

export default ProductList
