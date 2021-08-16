import React from 'react'
import Product from './Product/Product'
import './ProductList.scss'

type Prod = {
    productTitle: string,
    productDescription: string,
}

const ProductList = () => {

    const products: Prod[] = [{
        productTitle: "fdjfsd", productDescription:"fnjsfbsd"
    },{
        productTitle: "fdjfsd", productDescription:"fnjsfbsd"
    },{
        productTitle: "fdjfsd", productDescription:"fnjsfbsd"
    },{
        productTitle: "fdjfsd", productDescription:"fnjsfbsd"
    },{
        productTitle: "fdjfsd", productDescription:"fnjsfbsd"
    },{
        productTitle: "fdjfsd", productDescription:"fnjsfbsd"
    },{
        productTitle: "fdjfsd", productDescription:"fnjsfbsd"
    },{
        productTitle: "fdjfsd", productDescription:"fnjsfbsd"
    },{
        productTitle: "fdjfsd", productDescription:"fnjsfbsd"
    },{
        productTitle: "fdjfsd", productDescription:"fnjsfbsd"
    }]
    return (
        <div className="product-container">
            {
                products.map(product => (
                    <Product productTitle={product.productTitle} 
                    productDescription={product.productDescription} />
                ))
            }

        </div>
    )
}

export default ProductList
