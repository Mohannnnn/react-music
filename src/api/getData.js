/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:16:14 
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-01-14 23:23:31
 */

import fetch from '../utils/fetch';
import requestUrl from './requestUrl';
 
//获取热门歌单列表
export const getAlbumList = () => fetch({
    url : requestUrl.albumList,
    data : {
        key : 579621905,
        cat : '全部',
        limit : 12,
        offset : 0 ,
        order : 'hot'
    }
})
