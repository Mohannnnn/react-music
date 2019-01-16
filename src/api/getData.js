/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:16:14 
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-01-16 10:37:36
 */

import fetch from '../utils/fetch';
import requestUrl from './requestUrl';
 
//获取热门歌单列表
export const getAlbumList = ({limit = 12 , order = 'hot'} = {}) => fetch({
    url : requestUrl.albumList,
    data : {
        key : 579621905,
        cat : '全部',
        limit : limit,
        offset : 0 ,
        order : order
    }
})

//获取歌曲列表
export const getSongList = ({limit = 20 , id = 3778678} = {}) => fetch({
    url : requestUrl.songList,
    data : {
        key : 579621905,
        id : id ,
        limit : limit,
        offset : 0
    }
})

//获取歌曲信息
export const getSongMsg = ({id = 516728102} = {}) => fetch({
    url : requestUrl.songMsg,
    data : {
        key: 579621905,
        id : id
    }
})