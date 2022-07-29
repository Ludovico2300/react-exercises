import React from "react";

export class Counter extends React.Component {
    state = {
        count: this.props.initCounter
    }; //lo state è una vera e propria proprietà (oggetto) della classe
    //in questo caso la classe Counter contiene l'oggetto state, con la proprietà count 

    constructor(props) {
        super(props);
        setInterval(() => {
            this.setState((state) => { //setState viene richiamata ogni volta che lo state si evolve
                return {
                    count: state.count + this.props.increment, 
                };
            });
        }, this.props.interval); 
    }
    render() {
        return <h1>count: {this.state.count}</h1>;
    }

}