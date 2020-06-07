import React, { Component } from 'react';
export default function HOC(HocComponent, HocData) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: HocData
            };
        }
        render() {
            return (
                <div>
                    <HocComponent data={this.state.data} />

                </div>
            );
        }
    }
}
