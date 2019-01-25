/*
 * @Author: wuhan  [https://github.com/Mohannnnn]
 * @Date: 2018-12-27 17:07:02
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-01-25 19:25:08
 */
import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../pages/home/index';
import PlayMusic from '../pages/PlayMusic/index';
import AlbumDetail from '../pages/albumDetail/index';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/home'  component={Home}/>
                <Route path='/playmusic'  component={PlayMusic}/>
                <Route path='/albumdetail'  component={AlbumDetail}/>
                <Redirect to="/home" />
            </Switch>
        </Router>
    )
}
export default Routes;