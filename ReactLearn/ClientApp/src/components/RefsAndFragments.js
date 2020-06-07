import React, { Component,Fragment } from 'react';
export default class Refs extends Component {
    constructor() {
        super();
        this.message = React.createRef();
    }
    display = (event) => {
        //console.log(this.message.current)

       console.log(this.message.current.value);
        this.message.current.focus()


    }
    render() {
        return (
            <div>
                <input type="text" ref={this.message} /><br/>
                <button onClick={this.display} >Submit</button>
            </div>)
    }
}
const TextInput = React.forwardRef((props, ref) => (
    <input type="text" placeholder="Hello World" ref={ref} />
));

const inputRef = React.createRef();  
export class ForwardRef extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        console.log(inputRef.current.value);
    };
    render() {
        return (
            <Fragment>
            <React.Fragment>
                <h1>Hello World</h1>
                <div>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <TextInput ref={inputRef} />
                        <button>Submit</button>
                    </form>
                </div>
            </React.Fragment>
            <React.Fragment>
                <h1>Hello World</h1>
                <div>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <TextInput ref={inputRef} />
                        <button>Submit</button>
                    </form>
                </div>
                </React.Fragment>
            </Fragment>
        );
    }
}  