/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:16:14 
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-05-17 15:43:40
 */

import fetch from '../utils/fetch';
import ajax from '../utils/ajax';
import requestUrl from './requestUrl';

//获取热门歌单列表
export const getAlbumList = ({ pageSize = 12, orderType = 'hot', format = 1 } = {}) => fetch({
    url: requestUrl.albumList,
    data: {
        key: 579621905,
        categoryType: '全部',
        pageSize: pageSize,
        page: 0,
        orderType: orderType,
        format: format
    }
})


//获取歌曲列表
export const getSongList = ({ pageSize = 20, id = 3778678, format = 1 } = {}) => fetch({
    url: requestUrl.songList,
    data: {
        key: 579621905,
        id: id,
        pageSize: pageSize,
        format: format
    }
})

//获取网易云歌曲信息
export const getNetEaseSongMsg = ({ id = 516728102, format = 1 } = {}) => fetch({
    url: requestUrl.netEaseSongMsg,
    data: {
        key: 579621905,
        id: id,
        format: format
    }
})

//获取QQ歌曲信息
export const getQqSongMsg = ({ id = 516728102, format = 1 } = {}) => fetch({
    url: requestUrl.qqSongMsg,
    data: {
        key: 579621905,
        id: id,
        format: format
    }
})

//获取酷狗歌曲信息
export const getKuGouSongMsg = ({ id = 516728102, format = 1 } = {}) => fetch({
    url: requestUrl.kuGouSongMsg,
    data: {
        key: 579621905,
        id: id,
        format: format
    }
})

//获取酷我歌曲信息
export const getKuWoSongMsg = ({ id = 516728102, format = 1 } = {}) => fetch({
    url: requestUrl.kuWoSongMsg,
    data: {
        key: 579621905,
        id: id,
        format: format
    }
})

//网易云歌单搜索
// 1. 音乐搜索:type=song
// 2. 专辑搜索:type=album
// 3. 歌单搜索:type=list
export const getNetEaseSearch = ({ keyword = '', type = 'song', pageSize = 10, format = 1 } = {}) => fetch({
    url: requestUrl.netEaseSearch,
    data: {
        key: 579621905,
        keyword: keyword,
        type: type,
        pageSize: pageSize,
        page: 0,
        format: format
    }
})

//QQ音乐歌单搜索
// 1. 音乐搜索:type=song
// 2. 专辑搜索:type=album
// 3. 用户搜索:type=user
export const getQqSearch = ({ keyword = '', type = 'song', pageSize = 10, format = 1 } = {}) => fetch({
    url: requestUrl.qqSearch,
    data: {
        key: 579621905,
        keyword: keyword,
        type: type,
        pageSize: pageSize,
        page: 0,
        format: format
    }
})

//酷狗歌单搜索
// 1. 音乐搜索:type=song
// 2. 专辑搜索:type=album
// 3. 用户搜索:type=user
export const getKugouSearch = ({ keyword = '', type = 'song', pageSize = 10, format = 1 } = {}) => fetch({
    url: requestUrl.kugouSearch,
    data: {
        key: 579621905,
        keyword: keyword,
        type: type,
        pageSize: pageSize,
        page: 0,
        format: format
    }
})


//酷我歌单搜索
// 1. 音乐搜索:type=song
// 2. 专辑搜索:type=album
// 3. 用户搜索:type=user
export const getKuwoSearch = ({ keyword = '', type = 'song', pageSize = 10, format = 1 } = {}) => fetch({
    url: requestUrl.kuWoSearch,
    data: {
        key: 579621905,
        keyword: keyword,
        type: type,
        pageSize: pageSize,
        page: 0,
        format: format
    }
})