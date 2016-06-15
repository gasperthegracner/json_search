/**
 * Created by gaspergracner on 15/06/16.
 */
/**
 * Created by gaspergracner on 15/06/16.
 */
import React from "react";

export default class Details extends  React.Component{
    render(){
        // if we have a url params:
        /*
        const {query}   = this.props.location;
        const {date, filter } = query;
        */

        const  { params }= this.props;
        return(
            <h1>Details of {params.id}</h1>
        );
    }
}