/*
 * @Author: wuhan  [https://github.com/Mohannnnn]
 * @Date: 2018-12-27 17:02:13
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-12-27 18:46:26
 * des: 这里是actions
 */
import * as actionsTypes from '../actionTypes/index';

export const updateUserInfo = (data) => {
    return {
        type : actionsTypes.UPDATE_USERINFO,
        data
    }
}