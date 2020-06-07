import React, { Component,lazy,Suspense } from 'react';
import { Route } from 'react-router';
import { Link, BrowserRouter, Switch } from 'react-router-dom';
import JSX from './components/JSX';
import * as CompTypes from './components/CompTypes';
import State from './components/State';
import Property from './components/Props';
import { Controlled }  from './components/FormsAndEvents';
import { ConditionRendering } from './components/ConditionalRendering';
import { List } from './components/List';
import Keys from './components/Keys';
import Refs, { ForwardRef} from './components/RefsAndFragments';
import { Header } from './components/Header';
import { Notfound } from './components/Notfound';
import HOCDemo  from './components/HOCDemo';
const Table = lazy(() => import('./components/Table'));



export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <React.Fragment>
            
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                
            <Route path='/ForwardRef' component={ForwardRef} />
                <Route path='/list' component={List} />
                    <Route path='/table' component={Table} />
                    <Route path='/hoc' component={HOCDemo} />
                    <Route component={Notfound} />  
                    
               
    </Switch>
        </Suspense>
        </React.Fragment>

           
            
     
    );
  }
}
