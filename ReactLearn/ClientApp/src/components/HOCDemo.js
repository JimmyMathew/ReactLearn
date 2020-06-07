import React, { Component } from 'react';
import HocDisplay from './HocDisplay';
import Hoc from './HOC';

const Staffs = Hoc(HocDisplay, "Staff");
const Students = Hoc(HocDisplay, "Student");

export default class HOCDemo extends Component {

    render() {
        return (
            <div>
               
                <Staffs />
                <Students/>
            </div>
        );
    }
}