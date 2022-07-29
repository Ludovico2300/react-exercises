import React from "react";

import {Age} from "./Age";


export class Welcome extends React.Component {

    render() {
        return (
            <>
                <p>Welcome, {this.props.name}!</p>
                {this.props.age >=18 
                ? <Age age={this.props.age}/>  //se rispettatto renderizza ?, altrimenti :
                : <p>You are very young!</p> } 
            </>
        )
    }
}

//set default value of a props 
Welcome.defaultProps = {
    name: "John",
};