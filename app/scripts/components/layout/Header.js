/**
 * Created by gaspergracner on 14/06/16.
 */
import React from "react";
import { Link } from "react-router";

export default class Header extends  React.Component{
    render(){
        return(
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Search me :)</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li><Link to="search" >Search</Link></li>
                        <li><Link to="archive">Archive</Link></li>
                        <li><Link to="about">About</Link></li>
                    </ul>
                </div>
            </nav>

        );
    }
}