import React from "react"

let Counter = React.createClass({
    render() {
        return (
            <button onClick={this.props.onIncrement}>
                {this.props.countNum}
            </button>
        );
    }
});

module.exports = Counter;