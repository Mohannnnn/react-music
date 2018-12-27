/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-09-19 21:16:14 
 * @Last Modified by: wuhan
 * @Last Modified time: 2018-10-11 10:52:04
 */

import fetch from './fetch';
import requestUrl from './requestUrl';
 
//获取位置信息
export const getCurLocation = (latitude = 40.032344 , longitude = 116.281948) => fetch({
    url : requestUrl.currentLocation,
    data : {
        latitude : latitude ,
        longitude : longitude
    }
})

//获取热搜列表
export const getSearchHotList = (latitude , longitude) => fetch({
    url : requestUrl.searchHotList,
    data : {
        latitude : latitude,
        longitude : longitude
    }
})

//获取搜索推荐结果列表
export const getSearchRelateList = (key , latitude , longitude , cityId = 3) => fetch({
    url : requestUrl.searchRelateList,
    data : {
        kw : key ,
        latitude : latitude,
        longitude : longitude,
        city_id : cityId
    }
})

//首页外卖类型接口列表
export const getMsiteModeList = (latitude , longitude) => fetch({
    url : requestUrl.msiteModeList,
    data : {
        terminal      : 'h5',
        latitude      : latitude,
        longitude     : longitude 
    }
})

//首页banner接口
export const getMsiteBannerList = (latitude , longitude) => fetch({
    url : requestUrl.msiteBannerList,
    data : {
        consumer      : 1,
        type          : 1,
        latitude      : latitude,
        longitude     : longitude 
    }
})

//首页推荐商家bar接口
export const getMsiteBarList = (latitude , longitude) => fetch({
    url : requestUrl.msiteBarList,
    data : {
        terminal      : 'h5',
        latitude      : latitude,
        longitude     : longitude 
    }
})

//首页商家接口
export const getRestaurantsList = (latitude , longitude , datas = {}) => fetch({
    url : requestUrl.restaurantsList,
    data :  Object.assign({
            terminal      : 'h5',
            latitude      : latitude,
            longitude     : longitude,
            offset        : 0,
            limit         : 8,
            'extras[]'    : 'activities',
            // 'extras[]'    : 'tags',
            extra_filters : 'home',
            rank_id       : ''
        } ,datas)
})