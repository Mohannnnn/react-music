import React from 'react';
import {
    Row , Col , Icon, Layout,Input,Avatar,Menu
} from 'antd';
import { 
    addSongList as songListAddAction,
    deleteSongList as songListDeleteAction,
    deleteAllSongList as songListDeleteAllAction,
    updateSongPlayCur as songPlayCurUpdateAction,
    updateSongPlayStatus as songPlayStatusUpdateAction,
    updateSongPlayTime as songPlayTimeUpdateAction,
    updateSongPlayVolume as songPlayVolumeUpdateAction,
} from '../../store/actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getNetEaseSongMsg , getQqSongMsg ,getKuGouSongMsg } from "../../api/getData.js";
import './index.scss';

class songDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
        this.getSongMsg = this.getSongMsg.bind(this);
        this.changeSongPlayStatus = this.changeSongPlayStatus.bind(this);
        this.nextSongPlay = this.nextSongPlay.bind(this);
        this.preSongPlay = this.preSongPlay.bind(this);
    }
    componentDidMount() {
        //初始化请求，放在这里面
        const query = this.props.location.query;
        const search = this.props.location.search;
        const songId = (query && query.id) ? query.id : search.split('&')[0].split('=')[1];
        const type = (query && query.from) ? query.from : search.split('&')[1].split('=')[1];
        this.props.songListAddDispatch({id : songId , type : type});
        this.getSongMsg(songId , type);
    }
    //获取歌曲详情
    getSongMsg(songId , type){
        switch (type.toLocaleLowerCase()) {
            case 'netease':
                getNetEaseSongMsg({id : songId}).then(res => {
                    console.log(res)
                    if(res.code == 200){
                        this.props.songPlayCurUpdateDispatch(res.data);
                        this.props.songPlayStatusUpdateDispatch(true);
                    }
                })
                break;
            case 'qq':
                getQqSongMsg({id : songId}).then(res => {
                    console.log(res)
                    if(res.code == 200){
                        this.props.songPlayCurUpdateDispatch(res.data);
                        this.props.songPlayStatusUpdateDispatch(true);
                    }
                })
                break;
            case 'kugou':
                getKuGouSongMsg({id : songId}).then(res => {
                    console.log(res)
                    if(res.code == 200){
                        this.props.songPlayCurUpdateDispatch(res.data);
                        this.props.songPlayStatusUpdateDispatch(true);
                    }
                })
                break;
            default:
                break;
        }
    }
    //切换播放状态
    changeSongPlayStatus(){
        this.props.songPlayStatusUpdateDispatch(!this.props.songPlayStatus);
    }
    //播放下一首
    nextSongPlay(){
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
    //播放上一首
    preSongPlay(){
        const songListLen = this.props.songList.length;
        if(songListLen>1){
            this.props.songList.forEach((ele , index)=> {
                if(ele.id == this.props.songPlayCur.id){
                    const id = this.props.songList[(index+4)%songListLen].id;
                    const type = this.props.songList[(index+4)%songListLen].type;
                    this.getSongMsg(id , type);
                    return;
                }
            });
        }
    }
    render(){
        return(
            <section className="song-detail">
                <div className="song-bg" style={{backgroundImage:`url(${this.props.songPlayCur.pic})`}}></div>
                <div className="song-container">
                    <Row style={{padding:'15px 10px'}}><Icon type="left" onClick={()=> window.history.back()} style={{fontSize:'25px',color:'#fff'}}/></Row>
                    <Row type={'flex'} gutter={10} align='middle' justify={'space-between'} style={{flexDirection:'column',paddingBottom:'60px'}}>
                        <Col style={{fontSize:'24px',color:'#fff'}}>{this.props.songPlayCur.name}</Col>
                        <Col style={{fontSize:'18px',color:'#fff'}}>-{this.props.songPlayCur.singer}-</Col>
                    </Row>
                    <Row>
                        <Col className={`${this.props.songPlayStatus? 'playing' : 'paused'} song-pic`} style={{backgroundImage:`url(${this.props.songPlayCur.pic})`,borderRadius: '50%',margin:'0 auto',width:'256px',height:'256px'}}></Col>
                    </Row>
                    <Row  type={'flex'} align='middle' justify={'space-between'} style={{padding:'20px 20px 40px',position:'fixed',bottom:'0',left:'0',width:'100%'}}>
                        <Icon type="sound" style={{fontSize:'30px',color:'#fff'}}/>
                        <Icon onClick={this.preSongPlay} type="step-backward" style={{fontSize:'50px',color:'#fff'}} />
                        <Icon onClick={this.changeSongPlayStatus} type={ !this.props.songPlayStatus ? "play-circle" : "pause-circle"} style={{fontSize:'47px',color:'#fff'}}/>
                        <Icon onClick={this.nextSongPlay} type="step-forward" style={{fontSize:'50px',color:'#fff'}} />
                        <Icon type="menu-unfold" style={{fontSize:'30px',color:'#fff'}}/>
                    </Row>
                </div>
            </section>
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
        songListAddDispatch : bindActionCreators(songListAddAction , dispatch),
        songListDeleteDispatch : bindActionCreators(songListDeleteAction , dispatch),
        songPlayDeleteAllDispatch : bindActionCreators(songListDeleteAllAction , dispatch),
        songPlayCurUpdateDispatch : bindActionCreators(songPlayCurUpdateAction , dispatch),
        songPlayStatusUpdateDispatch : bindActionCreators(songPlayStatusUpdateAction , dispatch),
        songPlayTimeUpdateDispatch : bindActionCreators(songPlayTimeUpdateAction , dispatch),
        songPlayVolumeUpdateDispatch : bindActionCreators(songPlayVolumeUpdateAction , dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(songDetail);