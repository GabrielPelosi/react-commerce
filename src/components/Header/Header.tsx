import React from 'react'
import './Header.scss'
import { AddShoppingCart, Search, CheckCircleOutline, LocalShipping } from '@material-ui/icons';
const Header = () => {
    return (
        <>
            <header className="header-tutorial">
                <div className="title">
                    <h3>Faça suas compras aqui!</h3>
                </div>
                <div className="tutorial-container">
                    <div className="card-tutorial">
                        <Search style={{ fontSize: 60, color: "#575b8b" }} />
                        <h4>Analise</h4>
                        <p>
                            os diversos tipos de produtos!!
                        </p>
                    </div>
                    <div className="card-tutorial">
                        <AddShoppingCart style={{ fontSize: 60, color: "#575b8b" }} />
                        <h4>Monte</h4>
                        <p>
                            seu carrinho de compras!
                        </p>
                    </div>
                    <div className="card-tutorial">
                        <CheckCircleOutline style={{ fontSize: 60, color: "#575b8b" }} />
                        <h4>Finalize</h4>
                        <p>
                            o seu pedido!
                        </p>
                    </div>
                    <div className="card-tutorial">
                        <LocalShipping style={{ fontSize: 60, color: "#575b8b" }} />
                        <h4>Aguarde</h4>
                        <p>
                            nosso entregador chegar com sua encomenda!
                        </p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
