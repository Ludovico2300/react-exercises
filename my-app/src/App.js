import React from "react"

import { HelloWorld } from "./HelloWorld";
import { Message } from "./Message";
import  {Welcome}  from "./Welcome";
import { Counter } from "./Counter";

const helloWorldElement = <HelloWorld />
const messageElement = <Message />
const counterElement = <Counter />

//set default value of a props 
Welcome.defaultProps = {
    name: "John",
};


export class App extends React.Component {
    render() {
        return (
            <div>
                {helloWorldElement}
                {messageElement}
                <Welcome age={12}/>
                {counterElement}
            </div>
        )
    }
}

