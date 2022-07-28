import React from "react"

import { HelloWorld } from "./HelloWorld";
import { Message } from "./Message";
import  {Welcome}  from "./Welcome";

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
                <Welcome name={<strong>Mario</strong>} age={21}/>
            </div>
        )
    }
}

