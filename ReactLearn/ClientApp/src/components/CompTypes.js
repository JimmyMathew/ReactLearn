import React, { Component} from "react";

export default function CompTypes() {
        return (
            <div>
                <h1>This is a function component</h1>
            </div>
        );

}
export class NonDefaultComp extends Component {
    render(){
        return (
            <div>
                <h1>This is a NonDefault component</h1>
            </div>
        );
    };

}