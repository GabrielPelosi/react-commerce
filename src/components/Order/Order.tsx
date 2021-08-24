import React, { useState, useEffect } from 'react'
import { CartProduct } from '../../types/CartProduct'
import './Order.scss'

type OrderParams = {
    cartItems: CartProduct[],
}
const Order = ({ cartItems }: OrderParams) => {
    
    const [totalState, setTotalSate] = useState<number>(0)

    useEffect(() => {
        var total = 0
        for (let i = 0; i<cartItems.length; i++){
            total += (cartItems[i].quantity * cartItems[i].product.price)
            setTotalSate(total)
        }
    },[])

    return (typeof cartItems !== 'undefined' && cartItems.length > 0) ? (
        <>
            <div className="form-cart-container">
                <div className="form-container">

                    <img src="https://image.flaticon.com/icons/png/512/167/167531.png" alt="" />
                    <h1 className="order-title">Finalizar compra</h1>
                    <form>

                        <fieldset className="grupo">
                            <div className="campo">
                                <label><strong>Nome</strong></label>
                                <input placeholder="ex. Gabrie, José" type="text" name="nome" id="nome" required />
                            </div>

                            <div className="campo">
                                <label ><strong>Sobrenome</strong></label>
                                <input placeholder="ex. Silva, Santo" type="text" name="sobrenome" id="sobrenome" required />
                            </div>
                        </fieldset>

                        <div className="campo">
                            <label ><strong>Email</strong></label>
                            <input placeholder="ex. abbc@gmail.com" type="email" name="email" id="email" required />
                        </div>

                        <fieldset className="grupo">
                            <div className="campo">
                                <label><strong>Endereço</strong></label>
                                <input placeholder="ex. Rua abc, 150" type="text" name="endereco" id="endereco" required />
                            </div>

                            <div className="campo">
                                <label ><strong>Cidade</strong></label>
                                <input placeholder="ex. Rio de janeiro" type="text" name="cidade" id="cidade" required />
                            </div>

                            <div className="campo">
                                <label ><strong>Estado</strong></label>
                                <input placeholder="ex. São Paulo, Recife" type="text" name="estado" id="estado" required />
                            </div>

                        </fieldset>
                        <fieldset className="grupo">
                            <div className="campo">
                                <label><strong>Número do Cartão</strong></label>
                                <input placeholder="xxxx xxxx xxxx xxxx" type="text" name="num-cart" id="num-cart" required />
                            </div>

                            <div className="campo">
                                <label ><strong>Data de validade: Mês</strong></label>
                                <select>
                                    <option value="Jan">Jan</option>
                                    <option value="Fev">Fev</option>
                                    <option value="Mar">Mar</option>
                                    <option value="Abr">Abr</option>
                                    <option value="Mai">Mai</option>
                                    <option value="Jun">Jun</option>
                                    <option value="Jul">Jul</option>
                                    <option value="Ago">Ago</option>
                                    <option value="Set">Set</option>
                                    <option value="Out">Out</option>
                                    <option value="Nov">Nov</option>
                                    <option value="Dez">Dez</option>
                                </select>
                            </div>

                            <div className="campo">
                                <label ><strong>Data de validade: Ano</strong></label>
                                <input type="text" name="ano" id="ano" required />
                            </div>

                            <div className="campo">
                                <label ><strong>Código</strong></label>
                                <input placeholder="xxx" type="text" name="cod" id="cod" required />
                            </div>
                        </fieldset>
                        <h2>Total da compra: {totalState}R$</h2>
                        <button className="botao">Finalizar pagamento</button>

                    </form>
                </div>

                <div className="cart-items-order-container">


                    {
                        cartItems.map(cartItem => (
                            <div className="cart-items-order">
                                <img src="https://image.flaticon.com/icons/png/512/167/167531.png" alt="" />
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
