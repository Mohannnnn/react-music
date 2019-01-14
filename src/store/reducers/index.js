/*
 * @Author: wuhan  [https://github.com/Mohannnnn]
 * @Date: 2018-12-27 17:02:13
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-12-27 19:16:17
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

//首页推荐歌单
const recommendList = (state = states.recommendList , action) =>{
    switch (action.type) {
        case actionsTypes.GET_RECOMMEND :
            return action.data;
        default:
            return state;
    }
}

export default combineReducers({
    userInfo,
    recommendList
})