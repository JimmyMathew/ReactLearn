import React, { Component } from "react";

export default class UnControlled extends Component {

    constructor() {
        super();
        this.name = React.createRef();
    }
    handleSubmit = () => {
        //Latest methods
        console.log(this.name.current.value);
        //Old method
        console.log(this.refs.age.value);
    }
    render() {
        return (
            <div>
                <input type="text"
                    ref={this.name}
                    
                /><br />
                <br />
                <input type="number"
                    ref="age"
                /><br /><br />
                <button
                    onClick={this.handleSubmit}>Save</button>
            </div>
            );
    };
} 
export  class Controlled extends Component {

    constructor() {
        super();
        this.state = {name: "" , age:null};
    }
    handleChange = (event) => {
        let targetName = event.target.name;
        this.setState({
            [targetName]: event.target.value
        })
    }
    handleSubmit = (event) => {
        console.log("Name: " + this.state.name  + " Age: " + this.state.age );

    }
    render() {
        return (
            <div>
                <input type="text"
                 value={this.state.name} 
                    name="name"
                    onChange={this.handleChange}
                /><br />
                <br />
                <input type="number"
                    value={this.state.age}
                    name="age"
                    onChange={this.handleChange}
                /><br /><br />
                <h1>{this.state.name} {this.state.age}</h1>
                <button
                    onClick={this.handleSubmit}>Save</button>
            </div>
        );
    };
} 
