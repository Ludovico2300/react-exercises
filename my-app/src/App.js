import React from "react"

import { HelloWorld } from "./HelloWorld";
import { Message } from "./Message";
import  {Welcome}  from "./Welcome";
import { Counter } from "./Counter";

const helloWorldElement = <HelloWorld />
const messageElement = <Message />


//set default value of a props 
Welcome.defaultProps = {
    name: "John",
};

Counter.defaultProps = {
    initCounter: 0,
    increment: 1,
    interval: 1000,
};


export class App extends React.Component {
    render() {
        return (
            <div>
                {helloWorldElement}
                {messageElement}
                <Welcome age={12}/>
                <Counter initCounter={0} increment={1} interval={1000}/>
            </div>
        )
    }
}

