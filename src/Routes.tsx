import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home'

import React from 'react'
import Order from "./components/Order/Order";
import Favorites from "./components/Favorites/Favorites";
import Historic from "./components/Historic/Historic";


const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>

                    <Route path="/order" render={({ location }) => {
                        const { state }: any = location
                        return <Order cartItems={state.cartItems} />
                    }}
                    />

                    <Route path="/favoritos">
                        <Favorites/>
                    </Route>

                    <Route path="/historico">
                        <Historic/>
                    </Route>


                </Switch>


            </BrowserRouter>
        </div>
    )
}

export default Routes
