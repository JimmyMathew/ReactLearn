import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class Header extends Component {
    render(){
        return (
            <React.Fragment>

                <ul>
                    <li><a class="active" href="#home">CompTypes</a></li>
                    <li><a href="/jsx">JSX</a></li>
                    <li><a href="/list">List</a></li>
                    <li><Link to="/ForwardRef">Reference</Link>  </li>
                    <li><Link to="/table">LazyLoadedTable</Link>  </li>
                    <li><Link to="/hoc">HOC Demo</Link>  </li>
                </ul>
            </React.Fragment>
        );
    };

}