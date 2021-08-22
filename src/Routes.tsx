import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home'

import React from 'react'
import Order from "./components/Order/Order";
import { CartProduct } from "./types/CartProduct";

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>

                    <Route path="/order" render={({location}) => {
                        const {state}:any = location
                        return <Order cartItems={state.cartItems}/>}}
                        />



                </Switch>
            
            
            </BrowserRouter>
        </div>
    )
}

export default Routes
