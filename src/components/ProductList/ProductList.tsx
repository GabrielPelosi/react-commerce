import React, {useState} from 'react'
import { CartProduct } from '../../types/CartProduct'
import Product from './Product/Product'
import './ProductList.scss'
import { ProductType } from '../../types/Product'
import Popup from '../Popup/Popup';

type ProductParam = {
    cartItems: CartProduct[],
    setCartItems: Function,
    setCartMenuState: Function,
    setProductItemCount: Function,
    productItemCount: number,
}

const ProductList = ({ cartItems, setCartItems, setCartMenuState,setProductItemCount,productItemCount }: ProductParam) => {

    const [alertValue, setAlertValue] = useState<boolean>(false)

    const products: ProductType[] = [{
        id: 1, name: "fdjfsd", description: "fnjsfbsd", price: 15.99
    }, {
        id: 2, name: "54648", description: "fnjsfbsd", price: 12.50
    }, {
        id: 3, name: "uiopymopi", description: "fnjsfbsd", price: 10
    },]
    return (
        <>
            <div className="product-container">
                {
                    products.map(productObj => (
                        <Product productObj={productObj}
                            cartItems={cartItems} setCartItems={setCartItems}
                            setCartMenuState={setCartMenuState}
                            setPopuponError={setAlertValue}
                            setProductItemCount={setProductItemCount}
                            productItemCount={productItemCount} />
                    ))
                }

            </div>
            <div>
                <Popup trigger={alertValue}
                    alertMessage="Quantidade deve ser superior a 0 e inferior a 10"
                    setTrigger={setAlertValue} />
            </div>
        </>
    )
}

export default ProductList
