import React, { useState, useEffect } from 'react'
import { CartProduct } from '../../types/CartProduct'
import './Order.scss'

type OrderParams = {
    cartItems: CartProduct[],
}
const Order = ({ cartItems }: OrderParams) => {

    return (typeof cartItems !== 'undefined' && cartItems.length > 0) ? (
        <>
            <div className="form-container">
            
            <img src="https://image.flaticon.com/icons/png/512/167/167531.png" alt=""/>
            <h1 className="order-title">Finalizar compra</h1>
                <form>

                    <fieldset className="grupo">
                        <div className="campo">
                            <label><strong>Nome</strong></label>
                            <input type="text" name="nome" id="nome" required />
                        </div>

                        <div className="campo">
                            <label ><strong>Sobrenome</strong></label>
                            <input type="text" name="sobrenome" id="sobrenome" required />
                        </div>
                    </fieldset>

                    <div className="campo">
                        <label ><strong>Email</strong></label>
                        <input type="email" name="email" id="email" required />
                    </div>

                    <fieldset className="grupo">
                        <div className="campo">
                            <label><strong>Endereço</strong></label>
                            <input type="text" name="nome" id="nome" required />
                        </div>

                        <div className="campo">
                            <label ><strong>Cidade</strong></label>
                            <input type="text" name="sobrenome" id="sobrenome" required />
                        </div>

                        <div className="campo">
                            <label ><strong>Estado</strong></label>
                            <input type="text" name="sobrenome" id="sobrenome" required />
                        </div>
                        
                    </fieldset>
                    <h2>Total da compra: 45R$</h2>
                    <button className="botao">Finalizar pagamento</button>
                    
                </form>
                <h1>Produtos</h1>
                <div className="cart-items-order-container">
                    
                {
                    cartItems.map(cartItem => (
                        <div className="cart-items-order">
                            <img src="https://image.flaticon.com/icons/png/512/167/167531.png" alt=""/>
                            <h2>{cartItem.product.name}</h2>
                            <h4>Qnt: {(cartItem.quantity)}</h4>
                            <h4>Preço: {(cartItem.product.price * cartItem.quantity)}</h4>
                        </div>

                    ))
                }
                </div>
                
            </div>
        </>
    ) : (
        <div>
            <h1>Você não pode vir aqui com o carrinho vazinho</h1>
        </div>
    )
}

export default Order
