/**
 * Created by gaspergracner on 15/06/16.
 */
/**
 * Created by gaspergracner on 15/06/16.
 */
import React from "react";

import Comment from "../components/Comment";
import * as CommentActions from "../actions/CommentActions";
import CommentsStore from "../stores/CommentsStore";


export default class Search extends  React.Component{

    constructor(){
        super();
        this.state={
            comments: CommentsStore.getAll(),
        };

    }

    searchComments(text)
    {
        CommentActions.filterComments(text);
    }

    componentWillMount(){
        CommentsStore.on("searchDone",()=>{
            this.setState({
                comments:CommentsStore.getResult()
            });
        })
    }
    handleChange(e){
        const value = e.target.value;
        this.searchComments(value);
    }

    render(){
        const { comments } = this.state;
        const CommentComponenents = comments.map((comment)=>{
            return <Comment key={comment.id} {...comment}/>
        });

        return(
            <div>
                <h1>Search</h1>
                <input class="form-control" onChange={this.handleChange.bind(this)}/>
                <button class="btn btn-success" onClick = {this.searchComments.bind(this)}>SEARCH!</button>
                <ul>{CommentComponenents}</ul>
            </div>
        );
    }
}