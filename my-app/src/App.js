import React from "react"

import { HelloWorld } from "./HelloWorld";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

const helloWorldElement = <HelloWorld />
const messageElement = <Message />

//set default value of a props 
Welcome.defaultProps = {
    name: "Ludovico",
};

export class App extends React.Component {
    render() {
        return (
            <div>
                {helloWorldElement}
                {messageElement}
                <Welcome age={21} name={<strong>Mario</strong>}/>
            </div>
        )
    }
}

