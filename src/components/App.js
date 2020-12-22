import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Home from '../pages/Home';
import Layaout from './Layaout'
import NotFound from './NotFound';

function App(){
    return (
        <BrowserRouter>
            <Layaout>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/badges" component={Badges}></Route>
                    <Route exact path="/badges/new" component={BadgeNew}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </Layaout>
        </BrowserRouter>
    )
}
export default App;