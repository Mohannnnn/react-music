import React from 'react';
import {
    Row , Col , Icon
} from 'antd';
import { Link } from 'react-router-dom';

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
                <QueueAnim type={['right', 'left']} ease={['easeOutQuart', 'easeInOutQuart']}>
                {
                    !this.state.songList.songs? <Loading/> : this.state.songList.songs.map((ele , index ) => {
                        if(index < 20) {
                            return (
                                <div key={index}>
                                    <Link to={{pathname : '/songdetail' , query : {id : ele.id ,from : 'netease' } , search : `?id=${ele.id}&from=netease`}} key={index}>                                    
                                        <Row type={'flex'}  align={'middle'} style={{padding:'5px 0 5px 10px'}}>
                                            <Col xs={{span: 2 }} sm={{span: 1}} style={{fontSize:'18px',color:'#999'}}>{index+1}</Col>
                                            <Col xs={{span: 22 }} sm={{span: 23}} style={{borderBottom:'1px solid rgba(170, 170, 170, 0.3)', paddingRight:'10px'}}>                                        
                                                <Row type={'flex'} justify={'space-between'} align={'middle'}>
                                                    <Row style={{width:'90%'}}>
                                                        <Col style={{fontSize:'16px',color:'#333'}}>{ele.name}</Col>
                                                        <Col style={{fontSize:'12px',color:'#888'}}>{ele.singer}</Col>
                                                    </Row>
                                                    <Icon type="play-circle" style={{ fontSize: '23px', color: '#aaaaaa'}}/>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Link>
                                </div>
                            )
                        }
                    })
                }
                </QueueAnim>
            </section>
        )
    }
}

export default HotList;