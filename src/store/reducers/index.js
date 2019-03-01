/*
 * @Author: wuhan  [https://github.com/Mohannnnn]
 * @Date: 2018-12-27 17:02:13
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-03-01 16:36:13
 * des: redux数据计算中心
 */
import { combineReducers } from 'redux';
import * as actionsTypes from '../actionTypes/index';
import states from './state';

const userInfo = (state = states.userInfo, action) => {
    switch (action.type) {
        case actionsTypes.USERINFO_UPDATE : 
            return action.data;
        default:
            return state;
    }
}

//推荐歌单
const albumList = (state = states.albumList , action) =>{
    switch (action.type) {
        case actionsTypes.ALBUMLIST_UPDATE :
            return action.data;
        default:
            return state;
    }
}

//播放歌单
const songList = (state = states.songList , action) => {
    switch (action.type) {
        case actionsTypes.SONGLIST_ADD :
            let arr = [...state , ...action.data];
            let obj = {};
            return arr.reduce((cur , next) => {
                obj[next.id] ? '' : obj[next.id] = true && cur.push(next);
                return cur;
            },[]);
        case actionsTypes.SONGLIST_DELETE :
            return state.filter(ele => {
                if(ele.id != action.data.id) return ele;
            });
        case actionsTypes.SONGLIST_DELETEALL :
            return state = [];
        default:
            return state; 
    }
}

//当前播放歌曲
const songPlayCur = (state = states.songPlayCur , action) => {
    switch (action.type) {
        case actionsTypes.SONGPLAYCUR_UPDATE : 
            return action.data;
        default :
            return state;
    }
}

//播放状态
const songPlayStatus = (state = states.songPlayStatus , action) => {
    switch (action.type) {
        case actionsTypes.SONGPLAYSTATUS_UPDATE : 
            return action.data;
        default :
            return state;
    }
}

//播放时间
const songPlayTime = (state = states.songPlayTime , action) => {
    switch (action.type) {
        case actionsTypes.SONGPLAYTIME_UPDATE : 
            return action.data;
        default :
            return state;
    }
}

//播放音量
const songPlayVolume = (state = states.songPlayVolume , action) => {
    switch (action.type) {
        case actionsTypes.SONGPLAYVOLUME_UPDATE : 
            return action.data;
        default :
            return state;
    }
}

export default combineReducers({
    userInfo,
    albumList,
    songList,
    songPlayCur,
    songPlayStatus,
    songPlayTime,
    songPlayVolume
})