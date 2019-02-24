/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2018-12-27 19:10:49 
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-02-24 17:20:46
 */
//设置state的初始状态
const state = {
  userInfo: '',             //用户信息
  albumList: [],            //首页播放歌单
  songList: [],             //播放歌曲列表({id,type}) 
  songPlayCur : {},         //当前播放歌曲信息
  songPlayStatus: false,    //播放状态
  songPlayTime : 0,         //播放时间
  songPlayVolume: 0.5,      //播放音量
}
export default state;
