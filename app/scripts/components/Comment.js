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
            <div class="panel panel-default">
                <div class="panel-body">
                    <h3>{name}</h3>
                    <h6>[id: {id} post id: {postId}]</h6>
                    <h5>{email}</h5>
                    <h4>{body}</h4>
                </div>
            </div>

        );
    }
}