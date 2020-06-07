
import React, { Component } from 'react';
function NamesList(props) {
    //let names = ["Jimmy", "Mathew","Joji","Molly"];
   // alert(props.namesProps);
    let namesList = props.namesProps.map((name) => {
        return <li>{name}</li>;
    });
    return (
        <ul>
            {namesList}
        </ul>
    );
}
export class List extends Component {

    render() {
        return (

            <div>
                
                <NamesList namesProps={['Mary', 'John']} />
            </div>
        );
    }
}