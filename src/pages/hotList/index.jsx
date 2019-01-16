import React from 'react';
import {
    Row , Col , Icon
} from 'antd';
import { connect } from 'react-redux';
import { getAlbumList as albumListAction } from '../../store/actions/index.js';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { getSongList } from "../../api/getData.js";
import './index.scss';

class HotList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            songList : []
        }
    }
    componentWillMount(){
        getSongList().then(res => {
            if(res.code == 200) {
                this.setState({
                    songList : res.data
                })
            }
        })
    }
    render(){
        return(
            <section className="hot-list">
                <Row>
                    <Col span={24} className="banner">
                        <div className="title-bg"></div>
                    </Col>
                </Row>
                <Row>
                    {
                        !this.state.songList.songs ? '' : this.state.songList.songs.map((ele , index ) => {
                            if(index < 20) {
                                return (
                                    <Link to={`/song?id=${ele.id}`} key={index}>                                    
                                        <Row type={'flex'}  align={'middle'} style={{padding:'5px 0 5px 10px'}}>
                                            <Col span={2} style={{fontSize:'17px'}}>{index+1}</Col>
                                            <Col span={22} style={{borderBottom:'1px solid rgba(170, 170, 170, 0.3)', paddingRight:'10px'}}>                                        
                                                <Row type={'flex'} justify={'space-between'} align={'middle'}>
                                                    <Row style={{width:'90%'}}>
                                                        <Col style={{fontSize:'18px'}}>{ele.name}</Col>
                                                        <Col style={{fontSize:'12px'}}>{ele.singer}</Col>
                                                    </Row>
                                                    <Icon type="play-circle" style={{ fontSize: '23px', color: '#aaaaaa'}}/>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Link>
                                )
                            }
                        })
                    }
                </Row>
            </section>
        )
    }
}

export default HotList;