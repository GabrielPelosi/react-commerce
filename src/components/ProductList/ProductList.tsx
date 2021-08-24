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
        id: 1, name: "Calça legging cinza", description: "fnjsfbsd", price: 15.99
    }, {
        id: 2, name: "Calça legging preta", description: "fnjsfbsd", price: 12.50
    }, {
        id: 3, name: "Duzia de meias pretas nike", description: "fnjsfbsd", price: 10
    },{
        id: 4, name: "Chinelo nike", description: "756756", price: 12
    },{
        id: 5, name: "Calça legging azul marinho", description: "yryrtyn", price: 13
    },{
        id: 6, name: "boné nike preto", description: "yryrynrynrnyrny", price: 11
    },{
        id: 7, name: "calça moletom nike cinza", description: "yryrynrynrnyrny", price: 11
    },{
        id: 8, name: "Tenis corrida nike preto", description: "yryrynrynrnyrny", price: 11
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
