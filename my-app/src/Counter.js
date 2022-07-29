import React from "react";

export class Counter extends React.Component {
    state = {
        count: 0
    }; //lo state è una vera e propria proprietà (oggetto) della classe
    //in questo caso la classe Counter contiene l'oggetto state, con la proprietà count 

    constructor(props) {
        super(props);
        setInterval(() => {
            this.setState((state) => { //setState viene richiamata ogni volta che lo state si evolve
                return {
                    count: state.count + 1, //aggiungo 1
                };
            });
        }, 1000); // ogni secondo
    }
    render() {
        return <h1>count: {this.state.count}</h1>;
    }

}