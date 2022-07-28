import React from "react";

export class Age extends React.Component {
    render() {
        console.log(this.props.age);
        return (
                <p>Your age is {this.props.age}</p>
        )
    }
}

Age.defaultProps = {
        age: 18,
    };