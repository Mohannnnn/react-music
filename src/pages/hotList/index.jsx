import React from 'react';
import {
    Row , Col , Icon
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
import './index.scss';

class HotList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            songList : []
        }
    }
    componentDidMount(){
        //热门歌单歌曲列表
        getSongList({id : 3778678}).then(res => {
            if(res.code == 200) {
                this.setState({
                    songList : res.data
                })
            }
        })
    }
    addToSongList(ele ,e) {
        e.stopPropagation();
        this.props.songListAddDispatch([Object.assign(ele,{type : 'netease'})]);
    }
    render(){
        return(
            <section className="hot-list">
                <Row>
                    <Col span={24} className="banner">
                        <div className="title-bg"></div>
                    </Col>
                </Row>
                <QueueAnim type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
                {
                    !this.state.songList? <Loading/> : this.state.songList.map((ele , index ) => {
                        if(index < 50) {
                            return (                         
                                <Row  key={index} type={'flex'}  align={'middle'} style={{padding:'5px 0 5px 10px'}}>
                                    <Col xs={{span: 2 }} sm={{span: 1}} style={{fontSize:'18px',color:'#999'}}>{index+1}</Col>
                                    <Col xs={{span: 22 }} sm={{span: 23}} style={{borderBottom:'1px solid rgba(170, 170, 170, 0.3)', paddingRight:'10px'}}>                                        
                                        <Row type={'flex'} justify={'space-between'} align={'middle'}>
                                            <Row style={{width:'80%'}}>
                                                <Link to={{pathname : '/songdetail' , query : {id : ele.id ,from : 'netease' } , search : `?id=${ele.id}&from=netease`}} key={index}>
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
export default connect(null,mapDispatchToProps)(HotList);