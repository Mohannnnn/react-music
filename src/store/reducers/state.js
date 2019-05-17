/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-12-27 19:10:49 
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-02-28 10:27:32
 */
//设置state的初始状态
const state = {
    userInfo: '', //用户信息
    albumList: [], //首页播放歌单
    songList: [], //播放歌曲列表({id,type,name,songer,lrc,pic,time,url})
    songPlayCur: {}, //当前播放歌曲信息
    songPlayStatus: false, //播放状态
    songPlayTime: 0, //播放时间
    songPlayVolume: 0.5, //播放音量
    songPlayMode: 0, //播放模式(0.顺序播放，1.随机播放，其他在这后面加)
}
export default state;