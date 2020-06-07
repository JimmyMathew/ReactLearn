import React, { Component } from 'react';
export default class HocDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }
    render() {
        return (

            <div>
                <h1>{this.props.data} page</h1>
            </div>
        );
    }
}