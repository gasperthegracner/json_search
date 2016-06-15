/**
 * Created by gaspergracner on 15/06/16.
 */
import dispatcher from "../dispatcher";

export function filterComments(text){
    dispatcher.dispatch({
        type:"FILTER_COMMENTS",
        text,
    });
}
