/**
 * Created by gaspergracner on 14/06/16.
 */

import React from "react";
import { Link } from "react-router";

import Header from "../components/layout/Header";

export default class Layout extends  React.Component{
    getVal(){
        return "Gašper";
    }
    render(){
        return(
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}