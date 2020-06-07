import React, { Component } from "react";

 class Property extends Component {
    constructor(Prop) {
        super(Prop);
        this.state = { message: this.props.name }
    }
    render() {
        //this.setState({message: "Mathew"})
        return (
            <div>
                <h1>Props value  - {this.state.message}</h1>
            </div>
            );
    };
}
Property.defaultProps = {
    name: "Guru"
}
export default Property;

