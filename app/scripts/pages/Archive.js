/**
 * Created by gaspergracner on 15/06/16.
 */
/**
 * Created by gaspergracner on 15/06/16.
 */
import React from "react";

import Comment from "../components/Comment";
import CommentsStore from "../stores/CommentsStore";

export default class Archive extends  React.Component{
    constructor(){
        super();
        this.state ={
            comments : CommentsStore.getAll(),
        };
    }

    render(){
        const { comments } = this.state;
        const CommentComponenents = comments.map((comment)=>{
            return <Comment key={comment.id} {...comment}/>
        });

        return(
            <div class="container">
                <h1>Archive of comments</h1>
                <ul>{CommentComponenents}</ul>
            </div>
        );
    }
}