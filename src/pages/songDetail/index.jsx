import React from 'react';
import {
    Row , Col , Icon, Slider
} from 'antd';
import { Link } from 'react-router-dom';
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
import { formatTime , formatLrc } from '../../utils/tools.js';
import fetch from '../../utils/fetch.js';

import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import './index.scss';

class songDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            slideTime : 0,
            isUseProgress : false,
            showPlayList : false,
            showLrc : false,
            lrcArr : [],
            startMoveIndex : 6,
            activeIndex : 0,
        }
        this.getSongMsg = this.getSongMsg.bind(this);
        this.changeSongPlayStatus = this.changeSongPlayStatus.bind(this);
        this.nextSongPlay = this.nextSongPlay.bind(this);
        this.preSongPlay = this.preSongPlay.bind(this);
        this.tipFormatterProgress = this.tipFormatterProgress.bind(this);
        this.progressChange = this.progressChange.bind(this);
        this.progressAfterChange = this.progressAfterChange.bind(this);
        this.changeLrcs = this.changeLrcs.bind(this);
        this.deleteAllSongList = this.deleteAllSongList.bind(this);
        this.changePlayList = this.changePlayList.bind(this); 
    }
    componentDidUpdate(prevProps){
        if(this.props.songPlayCur != prevProps.songPlayCur){
            fetch({url : this.props.songPlayCur.lrc , dataType :'text'}).then(res => {
                if(res) {
                    this.setState({
                        lrcArr : formatLrc(res)
                    })
                }
                // console.log(this.state.lrcArr)
            })
        }
        if(this.props.songPlayTime != prevProps.songPlayTime){
            this.state.lrcArr.forEach((ele,index) => {
                if(this.state.lrcArr[index+1] && this.props.songPlayTime >= ele.time && this.props.songPlayTime < this.state.lrcArr[index+1].time){
                    this.setState({
                        activeIndex : index
                    })
                    return;
                }
            })
        }
    }
    componentDidMount() {
        //初始化请求，放在这里面
        const query = this.props.location.query;
        const search = this.props.location.search;
        const songId = (query && query.id) ? query.id : search.split('&')[0].split('=')[1];
        const type = (query && query.from) ? query.from : search.split('&')[1].split('=')[1];
        this.getSongMsg(songId , type);
    }
    //获取歌曲详情
    getSongMsg(songId , type){
        switch (type.toLocaleLowerCase()) {
            case 'netease':
                getNetEaseSongMsg({id : songId}).then(res => {
                    //console.log(res)
                    if(res.code == 200){
                        this.props.songPlayCurUpdateDispatch(res.data);
                        this.props.songListAddDispatch({
                            id : songId , 
                            type : type,
                            name : res.data.name,
                            singer : res.data.singer
                        });
                    }
                })
                break;
            case 'qq':
                getQqSongMsg({id : songId}).then(res => {
                    //console.log(res)
                    if(res.code == 200){
                        this.props.songPlayCurUpdateDispatch(res.data);
                        this.props.songListAddDispatch({
                            id : songId , 
                            type : type,
                            name : res.data.name,
                            singer : res.data.singer
                        });
                    }
                })
                break;
            case 'kugou':
                getKuGouSongMsg({id : songId}).then(res => {
                    //console.log(res)
                    if(res.code == 200){
                        this.props.songPlayCurUpdateDispatch(res.data);
                        this.props.songListAddDispatch({
                            id : songId , 
                            type : type,
                            name : res.data.name,
                            singer : res.data.singer
                        });
                    }
                })
                break;
            default:
                break;
        }
    }
    changeLrcs(){
        this.setState({
            showLrc : !this.state.showLrc
        })
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
    //格式化进度
    tipFormatterProgress(value) {
        return formatTime(value);
    }
    //进度条
    progressChange(value){
        this.setState({
            isUseProgress : true,
            slideTime : value,
        })
    }
    progressAfterChange(value){
        if(document.querySelector('.audio-music')) document.querySelector('.audio-music').currentTime = value;
        this.setState({
            isUseProgress : false,
            slideTime : value,
        })
    }
    //删除
    deleteToSongList(ele,e) {
        e.stopPropagation();
        // console.log(ele,e.target)
        this.props.songListDeleteDispatch(ele);
    }
    //删除全部
    deleteAllSongList(){
        this.props.songListDeleteAllDispatch();
    }
    //切换播放列表状态
    changePlayList(){
        this.setState({
            showPlayList : !this.state.showPlayList
        })
    }
    render(){
        return(
            <section className="song-detail">
                <div className="song-bg" style={{backgroundImage:`url(${this.props.songPlayCur.pic})`}}></div>
                <div className="song-container">
                    <Row style={{padding:'15px 10px',fontSize:'25px',color:'#fff'}}><Icon type="left" onClick={()=> window.history.back()}/></Row>
                    <Row className="banner" onClick={this.changeLrcs}>
                        {
                            !this.state.showLrc ?
                            <Col className="banner-elem">
                                <TweenOne className="banner-content" animation={{ x: -100, opacity: 0, type: 'from',delay:100}}>
                                    <Row type={'flex'} gutter={10} align='middle' justify={'space-between'} style={{flexDirection:'column',paddingBottom:'25px'}}>
                                        <Col style={{fontSize:'24px',color:'#f3f3f3',padding:'0 20px'}}>{this.props.songPlayCur.name}</Col>
                                        <Col style={{fontSize:'18px',color:'#f3f3f3',padding:'0 20px'}}>-{this.props.songPlayCur.singer}-</Col>
                                    </Row>
                                </TweenOne>
                                <TweenOne className="banner-content" animation={{ x: -100, opacity: 0, type: 'from',delay: 300}}>
                                    <Col className={`${this.props.songPlayStatus? 'playing' : 'paused'} song-pic`} style={{backgroundImage:`url(${this.props.songPlayCur.pic})`,borderRadius: '50%',margin:'0 auto',width:'256px',height:'256px'}}></Col>
                                </TweenOne>
                            </Col>
                            :
                            <QueueAnim type={'right'} interval='50' ease={'easeOutQuart'}  className="banner-elem" style={{top : this.state.activeIndex-this.state.startMoveIndex < 0 ? '0' : -(this.state.activeIndex-this.state.startMoveIndex)*32 }}>
                                {
                                    this.state.lrcArr.length == 0 ? 
                                    <Col key='0'>加载歌词失败,尝试刷新~</Col>
                                    :
                                    this.state.lrcArr.map((ele , index) => {
                                        return (
                                            <Col key={index} style={{padding:'4px 0'}} className={index == this.state.activeIndex? 'active' : ''}>{ele.lrc}</Col>
                                        )
                                    })
                                }
                            </QueueAnim>
                        }
                    </Row>
                    <Row style={{position:'absolute',left:0,bottom:0,padding:'20px',width:'100%'}}>              
                        <Row type={'flex'} align='middle' justify={'space-between'} style={{paddingBottom:'20px'}}>
                            <span>{formatTime(this.props.songPlayTime)}</span>
                            <Slider tipFormatter={this.tipFormatterProgress} max={this.props.songPlayCur.time} min={0} value={ this.state.isUseProgress ? this.state.slideTime :  this.props.songPlayTime} onChange={this.progressChange} onAfterChange={this.progressAfterChange} style={{width:'66%'}}/>
                            <span>{this.props.songPlayCur.time ? formatTime(this.props.songPlayCur.time) : '00:00'}</span>
                        </Row>
                        <Row type={'flex'} align='middle' justify={'space-between'}>
                            <Icon type="sound" style={{fontSize:'30px',color:'#f3f3f3'}}/>
                            <Icon onClick={this.preSongPlay} type="step-backward" style={{fontSize:'50px',color:'#f3f3f3'}} />
                            <Icon onClick={this.changeSongPlayStatus} type={ !this.props.songPlayStatus ? "play-circle" : "pause-circle"} style={{fontSize:'47px',color:'#f3f3f3'}}/>
                            <Icon onClick={this.nextSongPlay} type="step-forward" style={{fontSize:'50px',color:'#f3f3f3'}} />
                            <Icon type="menu-unfold" style={{fontSize:'30px',color:'#f3f3f3'}} onClick={this.changePlayList}/>
                        </Row>
                    </Row>
                    {
                        !this.state.showPlayList ? '' : 
                        <Row style={{position:'absolute',left:0,bottom:0,width:'100%',height:'100%',transition:'all .5s'}}>
                            <Col style={{background:'#000',opacity:.6,width:'100%',height:'100%'}}></Col>
                            <QueueAnim type={'right'} interval='50' ease={'easeOutQuart'}  className=""  style={{transition:'all .5s',position:'absolute',left:0,bottom:0,maxHeight:'70%',minHeight:'60%',width: '100%',overflowY:'scroll',background: '#eee',padding: '0 15px',borderTopLeftRadius: '10px',borderTopRightRadius: '10px'}}>
                                <Row type={'flex'} justify={'space-between'} align={'middle'} style={{borderBottom:'1px solid #b7b6b6'}}>
                                    <Col style={{flex:'auto',textAlign:'center',fontSize:'18px',color:'#666',padding: '10px 0',cursor: 'pointer'}} onClick={this.changePlayList}>关闭</Col>
                                    <Icon type="delete" onClick={this.deleteAllSongList} style={{ fontSize: '20px',padding: '10px', color: '#8a8a8a',cursor: 'pointer'}}/>
                                </Row>
                                {
                                    this.props.songList.map((ele , index) => {
                                        return (
                                            <Row key={ele.id} type={'flex'} justify={'space-between'} align={'middle'} style={{borderBottom:'1px solid #b7b6b6'}}>
                                                <Col style={{flex:'auto',marginRight:'20px'}}>
                                                    <Link to={{pathname : '/songdetail' , query : {id : ele.id , from : ele.type} , search : `?id=${ele.id}&from=${ele.type}`}}> 
                                                        <span style={{fontSize:'18px',color:'#666'}}>{ele.name}</span>
                                                        <span style={{fontSize:'14px',color:'#888',}}> - {ele.singer}</span>
                                                    </Link>
                                                </Col>
                                                <Icon type="close" onClick={this.deleteToSongList.bind(this,ele)} style={{ fontSize: '18px',padding: '10px', color: '#8a8a8a',cursor: 'pointer'}}/>
                                            </Row>
                                        )
                                    })
                                }
                            </QueueAnim>
                        </Row>
                    }
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
        songListDeleteAllDispatch : bindActionCreators(songListDeleteAllAction , dispatch),
        songPlayCurUpdateDispatch : bindActionCreators(songPlayCurUpdateAction , dispatch),
        songPlayStatusUpdateDispatch : bindActionCreators(songPlayStatusUpdateAction , dispatch),
        songPlayTimeUpdateDispatch : bindActionCreators(songPlayTimeUpdateAction , dispatch),
        songPlayVolumeUpdateDispatch : bindActionCreators(songPlayVolumeUpdateAction , dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(songDetail);