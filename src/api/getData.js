/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:16:14 
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-01-31 18:01:18
 */

import fetch from '../utils/fetch';
import ajax from '../utils/ajax';
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

//网易云歌单搜索
// 1. 音乐搜索:type=song
// 2. 专辑搜索:type=album
// 3. 歌单搜索:type=list
export const getNetEaseSearch = ({ s = '', type = 'song' , limit = 10 } = {}) => fetch({
    url : requestUrl.netEaseSearch,
    data : {
        key: 579621905,
        s : s,
        type : type,
        limit : limit,
        offset : 0
    }
}) 

//QQ音乐歌单搜索
// 1. 音乐搜索:type=song
// 2. 专辑搜索:type=album
// 3. 用户搜索:type=user
export const getQqSearch = ({ s = '', type = 'song' , limit = 10 } = {}) => fetch({
    url : requestUrl.qqSearch,
    data : {
        key: 579621905,
        s : s,
        type : type,
        limit : limit,
        offset : 0
    }
}) 

//酷狗歌单搜索
export const getKugouSearch = ({ type = 'get' , dataType = 'json' , success = function(){} , data = {keyword : '', pagesize : 10}} = {}) => ajax({
    type : type,
    url : requestUrl.kugouSearch,
    dataType : dataType,
    success:success,
    data : Object.assign({
        format : 'json' ,
        keyword : '',
        page : 1 ,
        pagesize : 10 ,
        showtype : 1
    },data)
})