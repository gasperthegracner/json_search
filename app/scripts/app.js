/**
 * Created by gaspergracner on 14/06/16.
 */
import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";


import About from "./pages/About";
import Archive from "./pages/Archive";
import Details from "./pages/Details";
import Layout from "./pages/Layout";
import Search from "./pages/Search";


const app = document.getElementById('app');
ReactDOM.render(<Router history={hashHistory}>
                    <Route path="/" component={Layout}>
                        <IndexRoute component={Search}></IndexRoute>
                        <Route path="about" component={About}></Route>
                        <Route path="search" component={Search}></Route>
                        <Route path="archive" component={Archive}></Route>
                        <Route path="details/:id" component={Details}></Route>
                    </Route>
                </Router>
    ,app);
