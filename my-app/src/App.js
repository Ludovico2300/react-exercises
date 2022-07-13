import React from "react"

import { HelloWorld } from "./HelloWorld";
import { Message } from "./Message";

const helloWorldElement = <HelloWorld />
const messageElement = <Message />

export class App extends React.Component {
    render() {
        return (
        <div> 
            {helloWorldElement}
            {messageElement} 
        </div>
        )
    }
}

