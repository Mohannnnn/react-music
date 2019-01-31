/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-12-19 21:15:47 
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-01-30 14:02:22
 */

 //请求接口地址配置
 const requestUrl = {
    albumList : 'https://api.bzqll.com/music/netease/hotSongList',  //热门歌单列表
    songList : 'https://api.bzqll.com/music/netease/songList',      //歌单歌曲列表
    songMsg : 'https://api.bzqll.com/music/netease/song',           //歌曲信息
    netEaseSearch : 'https://api.bzqll.com/music/netease/search',   //网易云搜索
    qqSearch : 'https://api.bzqll.com/music/tencent/search',        //QQ音乐搜索
    kugouSearch : 'http://mobilecdn.kugou.com/api/v3/search/song',  //酷狗搜索
}
export  default requestUrl;