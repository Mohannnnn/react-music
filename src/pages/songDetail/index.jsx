import React from 'react';
import {
    Row , Col , Icon, Layout,Input,Avatar,Menu
} from 'antd';
import {HashRouter as Router, Switch, Route, Redirect , Link} from 'react-router-dom';
import { getNetEaseSongMsg , getQqSongMsg ,getKuGouSongMsg } from "../../api/getData.js";
import './index.scss';

class songDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            curSongMsg : {
                "id": "001fXNWa3t8EQQ",
                "name": "我喜欢上你时的内心活动",
                "time": 225,
                "singer": "陈绮贞",
                "url": "https://api.bzqll.com/music/tencent/url?id=001fXNWa3t8EQQ&key=579621905",
                "pic": "https://api.bzqll.com/music/tencent/pic?id=001fXNWa3t8EQQ&key=579621905",
                "lrc": "https://api.bzqll.com/music/tencent/lrc?id=001fXNWa3t8EQQ&key=579621905"
            }
        }
        this.getSongMsg = this.getSongMsg.bind(this);
    }
    componentDidMount() {
        //初始化请求，放在这里面
        const query = this.props.location.query;
        const search = this.props.location.search;
        const songId = (query && query.id) ? query.id : search.split('&')[0].split('=')[1];
        const type = (query && query.from) ? query.from : search.split('&')[1].split('=')[1];
        this.getSongMsg(songId , type);
    }
    getSongMsg(songId , type){
        switch (type.toLocaleLowerCase()) {
            // case 'netease':
            //     getNetEaseSongMsg({id : songId}).then(res => {
            //         console.log(res)
            //     })
            //     break;
            // case 'qq':
            //     getQqSongMsg({id : songId}).then(res => {
            //         console.log(res)
            //     })
            //     break;
            // case 'kugou':
            //     getKuGouSongMsg({id : songId}).then(res => {
            //         console.log(res)
            //     })
            //     break;
            // default:
            //     break;
        }
    }
    
    render(){
        return(
            <section className="song-detail">
                <div className="song-bg" style={{backgroundImage:`url(${this.state.curSongMsg.pic})`}}></div>
                <div className="song-container">
                    <Row style={{padding:'15px 10px'}}><Icon type="left" style={{fontSize:'25px',color:'#fff'}}/></Row>
                    <Row type={'flex'} gutter={10} align='middle' justify={'space-between'} style={{flexDirection:'column',paddingBottom:'60px'}}>
                        <Col style={{fontSize:'24px',color:'#fff'}}>{this.state.curSongMsg.name}</Col>
                        <Col style={{fontSize:'18px',color:'#fff'}}>-{this.state.curSongMsg.singer}-</Col>
                    </Row>
                    <Row>
                        <Col className="song-pic " style={{backgroundImage:`url(${this.state.curSongMsg.pic})`,borderRadius: '50%',margin:'0 auto',width:'256px',height:'256px'}}></Col>
                    </Row>
                    <Row  type={'flex'} align='middle' justify={'space-between'} style={{padding:'20px 10px 40px',position:'fixed',bottom:'0',left:'0',width:'100%'}}>
                        <Icon type="download" style={{fontSize:'35px',color:'#fff'}}/>
                        <Icon type="step-backward" style={{fontSize:'50px',color:'#fff'}} />
                        <Icon type="play-circle" style={{fontSize:'50px',color:'#fff'}}/>
                        {/* <Icon type="pause-circle" style={{fontSize:'50px',color:'#fff'}}/> */}
                        <Icon type="step-forward" style={{fontSize:'50px',color:'#fff'}} />
                        <Icon type="menu-unfold" style={{fontSize:'35px',color:'#fff'}}/>
                    </Row>
                </div>
            </section>
        )
    }
}

export default songDetail;