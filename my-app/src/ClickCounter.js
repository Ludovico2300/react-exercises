import React from "react";

export class ClickCounter extends React.Component {
    state = {
        count: this.props.initialCounter,
    }; //lo state è una vera e propria proprietà (oggetto) della classe
    //in questo caso la classe Counter contiene l'oggetto state, con la proprietà count 

    handleCounterIncrement=()=> {
        this.setState(state => {
            return { 
                count: state.count + this.props.incrementBy, 
            }
        })

    }

    render() {
        return (
            <>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleCounterIncrement}>Increment</button>
            </>
        )
    }

}



ClickCounter.defaultProps = {
    initialCounter: 0,
    incrementBy: 1,
};
