/*
 * @Author: wuhan  [https://github.com/Mohannnnn]
 * @Date: 2018-12-27 17:02:13
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-01-14 23:27:19
 * des: redux数据计算中心
 */
import { combineReducers } from 'redux';
import * as actionsTypes from '../actionTypes/index';
import states from './state';

const userInfo = (state = states.userInfo, action) => {
    switch (action.type) {
        case actionsTypes.UPDATE_USERINFO : 
            return action.data;
        default:
            return state
    }
}

//推荐歌单
const albumList = (state = states.albumList , action) =>{
    switch (action.type) {
        case actionsTypes.GET_ALBUMLIST :
            return action.data;
        default:
            return state;
    }
}


export default combineReducers({
    userInfo,
    albumList
})