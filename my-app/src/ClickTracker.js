import React from "react";

export class ClickTracker extends React.Component {
    state = {
        button: "",
    }; //lo state è una vera e propria proprietà (oggetto) della classe
    //in questo caso la classe Counter contiene l'oggetto state, con la proprietà count 

    handleClickButton = (event) => {
        this.setState({
            button: event.target.name,
        })

    }

    render() {
        return (
            <>
                <h1>You clicked: {this.state.button ? `${this.state.button} button` : "no button yet!" }</h1>
                <button name="increment" onClick={this.handleClickButton}>Increment</button>
                <button name="decrement" onClick={this.handleClickButton}>Decrement</button>
                <button name="reset" onClick={this.handleClickButton}>Reset</button>
            </>
        )
    }

}

