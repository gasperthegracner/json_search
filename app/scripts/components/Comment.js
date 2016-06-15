/**
 * Created by gaspergracner on 15/06/16.
 */
import React from "react";

export default class Comment extends  React.Component{
    constructor(props)
    {
        super();
    }

    render(){
        const { postId, id, name, email, body } = this.props;

        return(
            <li>
                <h1>{name} - ({id})</h1>
                <h4>{email}</h4>
                <h2>{body}</h2>
            </li>

        );
    }
}