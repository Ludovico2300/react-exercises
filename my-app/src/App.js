import React from "react"

import { HelloWorld } from "./HelloWorld";
import { Message } from "./Message";
import  {Welcome}  from "./Welcome";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";

const helloWorldElement = <HelloWorld />
const messageElement = <Message />


export class App extends React.Component {
    render() {
        return (
            <div>
                {/* {helloWorldElement}
                {messageElement}
                <Welcome age={12}/>
                <Counter initCounter={0} increment={1} interval={1000}/>
                <ClickCounter />
                <ClickTracker /> */}
                <div>
                <InteractiveWelcome/>
                </div>
            </div>
        )
    }
}

