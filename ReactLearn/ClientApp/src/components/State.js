import React, { Component } from "react";
export default class State extends Component {
    constructor() {
        super();
        this.state = { message: "Jimmy" ,count: 1 };
    }
    ChangeState = () => {
        this.setState({ message: "Mathew" });
       };
    render() {
        return (
            <div>
                <h1>State value  - {this.state.message}</h1>
                <button onClick={this.ChangeState}> Change State</button>
            </div>
        );
    };
}