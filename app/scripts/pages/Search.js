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
        this.getResult = this.getResult.bind(this);
        this.state={
            comments: CommentsStore.getAll(),
        };

    }

    searchComments(text)
    {
        CommentActions.filterComments(text);
    }

    componentWillMount(){
        CommentsStore.on("searchDone",this.getResult);
    }
    componentWillUnmount(){
        CommentsStore.removeListener("searchDone",this.getResult);
    }
    handleChange(e){
        const value = e.target.value;
        this.searchComments(value);
    }

    getResult(){
        this.setState({
            comments:CommentsStore.getResult()
        });
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
                        <input id="search-input" class="form-control input-lg" placeholder="Search comments" onChange={this.handleChange.bind(this)}/>
                    </div>
                </div>

                <div>{CommentComponenents}</div>
            </div>
        );
    }
}