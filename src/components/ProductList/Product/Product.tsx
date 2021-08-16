import React from 'react'
import './Product.scss';
type Prod = {
    productTitle: string,
    productDescription: string,
}

const Product = ({productTitle, productDescription}: Prod) => {
    return (
        <div className="product-card">
            <div className="product-img">

            </div>
            <div className="product-detail">
                <span>{productTitle}t</span>
                <div className="rating">
                    <i>a</i>
                    <i>a</i>
                    <i>a</i>
                    <i>a</i>
                    <i>a</i>
                </div>
                <p>{productDescription}</p>
                <div className="buttons">
                    <span className="price"> $ 50</span>
                    <button className="btn cart">Add to cart</button>
                    <button className="btn bookmark"><i></i></button>
                </div>
            </div>
        </div>
    )
}

export default Product
