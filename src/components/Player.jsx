import React from 'react';
import { updateSongPlayCur as songPlayCurUpdateAction } from '../store/actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNetEaseSongMsg , getQqSongMsg ,getKuGouSongMsg } from "../api/getData.js";

class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
        this.songToPlay = this.songToPlay.bind(this);
        this.songToPause = this.songToPause.bind(this);
        this.songTimeUpdate = this.songTimeUpdate.bind(this);
        this.songProgress = this.songProgress.bind(this);
        this.songEnd = this.songEnd.bind(this);
        this.getSongMsg = this.getSongMsg.bind(this);
    }
    static getDerivedStateFromProps(nextProps,prevState){
        return null;
    }
    componentDidUpdate(prevProps){
        if(this.props.songPlayStatus){
            this.songToPlay();
        }else {
            this.songToPause();
        }
    }
    //播放
    songToPlay(){
        this.refs.audioMusic.play();
    }
    //暂停
    songToPause(){
        this.refs.audioMusic.pause();
    }
    //播放进度
    songProgress(){
        // audio.buffered; 返回已缓冲区域，TimeRanges
        // aduio.duration; 返回当前媒体的总时间
        // audio.currentTime; 当前播放的位置，赋值可改变位置
        // audio.paused; 是否暂停
        // audio.ended;是否结束
        // audio.volume;音量控制（0-1）
        // console.log('progress'+this.refs.audioMusic.currentTime);
    }
    //播放事件
    songTimeUpdate(){
        // console.log('time'+this.refs.audioMusic.currentTime);
    }
    //播放结束
    songEnd(){
        const songListLen = this.props.songList.length;
        if(songListLen>1){
            this.props.songList.forEach((ele , index)=> {
                if(ele.id == this.props.songPlayCur.id){
                    const id = this.props.songList[(index+1)%songListLen].id;
                    const type = this.props.songList[(index+1)%songListLen].type;
                    this.getSongMsg(id , type);
                    return;
                }
            });
        }
    }
    //获取歌曲详情
    getSongMsg(songId , type){
        switch (type.toLocaleLowerCase()) {
            case 'netease':
                getNetEaseSongMsg({id : songId}).then(res => {
                    if(res.code == 200){
                        this.props.songPlayCurUpdateDispatch(res.data);
                    }
                })
                break;
            case 'qq':
                getQqSongMsg({id : songId}).then(res => {
                    if(res.code == 200){
                        this.props.songPlayCurUpdateDispatch(res.data);
                    }
                })
                break;
            case 'kugou':
                getKuGouSongMsg({id : songId}).then(res => {
                    if(res.code == 200){
                        this.props.songPlayCurUpdateDispatch(res.data);
                    }
                })
                break;
            default:
                break;
        }
    }
    render(){
        return(
            <div style={{width: '100%',height: '50px',display:'none'}}>
                <audio ref="audioMusic" onProgress={this.songProgress} onTimeUpdate={this.songTimeUpdate} onEnded={this.songEnd} src={this.props.songPlayCur.url? this.props.songPlayCur.url : ''} preload="auto" controls style={{width: '100%', height: '100%', display: 'block'}}></audio>
            </div>  
        )
    }
}
//注册store
const mapStateToProps = (state) => {
    return {
        songList: state.songList,                   //播放歌曲列表({id,type})
        songPlayCur : state.songPlayCur,            //当前播放
        songPlayStatus: state.songPlayStatus,       //播放状态
        songPlayTime : state.songPlayTime,          //播放时间
        songPlayVolume: state.songPlayVolume,       //播放音量
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        songPlayCurUpdateDispatch : bindActionCreators(songPlayCurUpdateAction , dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Player);