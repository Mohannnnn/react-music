/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-12-19 21:15:47 
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-02-19 14:08:47
 */

 //请求接口地址配置
 const requestUrl = {
    albumList : 'https://api.bzqll.com/music/netease/hotSongList',  //热门歌单列表
    songList : 'https://api.bzqll.com/music/netease/songList',      //歌单歌曲列表
    netEaseSearch : 'https://api.bzqll.com/music/netease/search',   //网易云搜索
    qqSearch : 'https://api.bzqll.com/music/tencent/search',        //QQ音乐搜索
    kugouSearch : 'https://api.bzqll.com/music/kugou/search',       //酷狗搜索
    netEaseSongMsg : 'https://api.bzqll.com/music/netease/song',    //网易云歌曲信息
    qqSongMsg : 'https://api.bzqll.com/music/tencent/song',         //QQ歌曲信息
    kuGouSongMsg : 'https://api.bzqll.com/music/kugou/song',        //酷狗歌曲信息
}
export  default requestUrl;