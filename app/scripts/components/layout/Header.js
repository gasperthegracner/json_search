/**
 * Created by gaspergracner on 14/06/16.
 */
import React from "react";
import { Link } from "react-router";

export default class Header extends  React.Component{
    render(){
        return(
            <div>
                <Link to="search" class="btn btn-success">Search</Link>
                <Link to="archive" class="btn btn-success">Archive</Link>
                <Link to="about" class="btn btn-success">About</Link>
            </div>
        );
    }
}