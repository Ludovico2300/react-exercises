import React from "react"

import { HelloWorld } from "./HelloWorld";

const helloWorldElement = <HelloWorld />

export class App extends React.Component{
    render(){
        return <div> {helloWorldElement} </div>
    }
}

