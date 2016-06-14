
/**
 * Created by gaspergracner on 14/06/16.
 */
/*
var type = "grizly";
while (true) {
    var _type = 'polar';
    console.log(_type);
    break;
}

console.log(type);
*/
import React from "react";
import ReactDOM from "react-dom";

class Layout extends  React.Component{
    render(){
        return(
            <h1>Working</h1>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>,app);
