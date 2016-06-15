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
            <div class="container">
                <div class="jumbotron vertical-center">
                    <div class="container">
                        <h2>Search for comments</h2>
                        <input class="form-control" onChange={this.handleChange.bind(this)}/>
                    </div>
                </div>

                <div>{CommentComponenents}</div>
            </div>
        );
    }
}