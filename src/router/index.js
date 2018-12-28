/*
 * @Author: wuhan  [https://github.com/Mohannnnn]
 * @Date: 2018-12-27 17:07:02
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-12-27 19:24:03
 */
import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Layout from '../pages/Layout';

const Routes = () => {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path='/' exact component={Layout}/>
                    <Redirect from='*' to='/404' />
                </Switch>
            </Router>
        </div>
    )
}
export default Routes;