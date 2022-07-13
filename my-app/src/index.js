import React from "react";
import ReactDOM from "react-dom"
import { App } from "./App";

const appElement = <App /> // metto il componennte in una variabile
const root = document.getElementById("root");

ReactDOM.render(appElement, root); //primo parametro: cosa renderizzare; secondo: dove renderizzare 
