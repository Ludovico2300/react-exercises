import React from "react";

export class Counter extends React.Component {
    state = {
        count: this.props.initCounter
    }; //lo state è una vera e propria proprietà (oggetto) della classe
    //in questo caso la classe Counter contiene l'oggetto state, con la proprietà count 

    componentDidMount() {

        setInterval(() => {
            this.setState((state) => { //setState viene richiamata ogni volta che lo state si evolve
                return {
                    count: state.count + this.props.increment,
                };
            });
        }, this.props.interval);
    }
    render() {
        return <CounterDisplay count={this.state.count} />;
    }

}

export class CounterDisplay extends React.Component {
    render() {
        return (
            <h1>Counter: {this.props.count}</h1>
        )
    }
}

Counter.defaultProps = {
    initCounter: 0,
    increment: 1,
    interval: 1000,
};
