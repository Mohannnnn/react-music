import React from 'react';
import {
    Row , Col ,Icon
} from 'antd';
import { Link } from 'react-router-dom';
import { 
    addSongList as songListAddAction,
} from '../../store/actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSongList } from '../../api/getData.js';
import Loading from '../../components/Loading';
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';
import './index.scss';

class AlbumDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id : null,
            songMsg : {},
        }
        this.getSongs = this.getSongs.bind(this);
    }
    //调用setState不会触发
    static getDerivedStateFromProps(nextProps , preState){
        return null;
    }
    componentDidMount() {
        //初始化请求，放在这里面
        const query = this.props.location.query;
        const search = this.props.location.search;
        const albumId = (query && query.id) ? query.id : search.split('=')[1];
        this.getSongs(albumId);
    }
    getSongs(albumId){
        getSongList({id : albumId,limit:30}).then(res => {
            if(res.code == 200){
                this.setState({
                    id : albumId,
                    songMsg : res.data
                })
            }
        });
    }
    addToSongList(ele ,e) {
        e.stopPropagation();
        this.props.songListAddDispatch({
            id : ele.id,
            type : 'netease',
            name : ele.name,
            singer : ele.singer
        })
    }
    render(){
        return(
            <section className="album-detail">
                <Row className="head"  style={{padding: '30px 10px 10px 15px'}}>
                    <div className="mask" style={{backgroundImage: `url(${this.state.songMsg.songListPic})`}}></div>
                    <Col xs={{span: 10 }} sm={{span: 6}} style={{postion:'relative',zIndex:2,}}>
                        <img src={this.state.songMsg.songListPic} alt="" style={{width:'126px',height:'126px'}}/>
                        <span className="listen">{this.state.songMsg.songListPlayCount}</span>
                    </Col>
                    <Col span={14} style={{postion:'relative',zIndex:2}}>
                        <Texty style={{color: '#fefefe',fontSize: '17px',lineHeight:'20px'}}>{this.state.songMsg.songListName}</Texty>
                        <Texty style={{color: '#ccc',fontSize: '14px'}}>{this.state.songMsg.songListUserId? `ID:${this.state.songMsg.songListUserId}` : ''}</Texty>
                    </Col>
                </Row>
                <Row style={{padding: '20px 10px 10px 15px',color: '#666',fontSize: '14px'}}>
                    <Texty>{this.state.songMsg.songListDescription ? `简介：${this.state.songMsg.songListDescription.slice(0,200)}` : ''}</Texty>
                </Row>
                <Row style={{padding: '0px 10px 0px 15px',color: '#666',fontSize: '14px',lineHeight:'25px',background:'#eeeff0'}}>
                    歌单列表：
                </Row>
                <Row style={{zIndex:10,position:'relative'}}>
                <QueueAnim type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
                    {
                    !this.state.songMsg.songs? <Loading/> : this.state.songMsg.songs.map((ele , index ) => {
                        if(index < 30) {
                            return (                                                          
                                <Row key={index} type={'flex'}  align={'middle'} style={{padding:'5px 0 5px 10px'}}>
                                    <Col xs={{span: 2 }} sm={{span: 1}} style={{fontSize:'18px',color:'#999'}}>{index+1}</Col>
                                    <Col xs={{span: 22 }} sm={{span: 23}} style={{borderBottom:'1px solid rgba(170, 170, 170, 0.3)', paddingRight:'10px'}}>                                        
                                        <Row type={'flex'} justify={'space-between'} align={'middle'}>
                                            <Row style={{width:'80%'}}>
                                                <Link to={{pathname : '/songdetail' , query : {id : ele.id , from : 'netease' } , search : `?id=${ele.id}&from=netease`}} key={index}>                                    
                                                    <Col style={{fontSize:'16px',color:'#333'}}>{ele.name}</Col>
                                                    <Col style={{fontSize:'12px',color:'#888'}}>{ele.singer}</Col>
                                                </Link>
                                            </Row>
                                            <Icon type="plus" onClick={this.addToSongList.bind(this,ele)} style={{ fontSize: '22px',padding: '10px', color: '#8a8a8a',cursor: 'pointer'}}/>
                                        </Row>
                                    </Col>
                                </Row>                 
                            )
                        }
                    })
                    }
                </QueueAnim>
                </Row>
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
    }
}
export default connect(null,mapDispatchToProps)(AlbumDetail);