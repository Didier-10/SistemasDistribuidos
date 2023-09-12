import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        }
    };

    incrementCounter = () => {
        this.setState({ counter: this.state.counter + 1});
    }

    render() {
        return(
            <div>
                <h1>Click Counter</h1>
                <p>Counter Value: {this.state.counter}</p>
                <button onClick={this.incrementCounter}>Increment</button>
            </div>
        );
    }
}

export default Counter