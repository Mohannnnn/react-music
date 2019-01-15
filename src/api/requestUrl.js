/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-12-19 21:15:47 
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-01-14 22:49:49
 */

 //请求接口地址配置
 const requestUrl = {
    albumList : 'https://api.bzqll.com/music/netease/hotSongList', //热门歌单列表
    songList : 'https://api.bzqll.com/music/netease/songList',//歌曲列表
    songMsg : 'https://api.bzqll.com/music/netease/song'//歌曲信息
//    https://api.bzqll.com/music/netease/hotSongList?key=579621905&cat=%E5%85%A8%E9%83%A8&limit=10&offset=0&order=hot
//    https://api.bzqll.com/music/netease/songList?key=579621905&id=3778678&limit=10&offset=0
//    https://api.bzqll.com/music/netease/song?key=579621905&id=516728102

}
export  default requestUrl;