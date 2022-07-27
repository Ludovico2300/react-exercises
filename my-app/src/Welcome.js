import React from "react";

import {Age} from "./Age";

Age.defaultProps = {
    age: 18,
};


export class Welcome extends React.Component {

    render() {
        return (
            <div>
                <p>Welcome, {this.props.name}!</p>
                {this.props.age >=18 && <Age age={20} />}
            </div>
        )
    }
}

