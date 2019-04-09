/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-12-19 21:15:47 
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-04-09 10:46:31
 */

//请求接口地址配置
const requestUrl = {
    albumList: 'https://api.itooi.cn/music/netease/hotSongList', //热门歌单列表
    songList: 'https://api.itooi.cn/music/netease/songList', //歌单歌曲列表
    netEaseSearch: 'https://api.itooi.cn/music/netease/search', //网易云搜索
    qqSearch: 'https://api.itooi.cn/music/tencent/search', //QQ音乐搜索
    kugouSearch: 'https://api.itooi.cn/music/kugou/search', //酷狗搜索
    netEaseSongMsg: 'https://api.itooi.cn/music/netease/song', //网易云歌曲信息
    qqSongMsg: 'https://api.itooi.cn/music/tencent/song', //QQ歌曲信息
    kuGouSongMsg: 'https://api.itooi.cn/music/kugou/song', //酷狗歌曲信息
}
export default requestUrl;