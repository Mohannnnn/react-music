/*
 * @Author: wuhan  [https://github.com/Mohannnnn]
 * @Date: 2018-12-27 17:02:13
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-01-14 23:11:26
 * des: 这里是actions
 */
import * as actionsTypes from '../actionTypes/index';

export const updateUserInfo = (data) => {
    return {
        type : actionsTypes.UPDATE_USERINFO,
        data
    }
}
//获取歌单
export const getAlbumList = (data) => {
    return {
        type : actionsTypes.GET_ALBUMLIST,
        data
    }
}