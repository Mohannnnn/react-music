import React from 'react';
import {
    Row , Col ,
} from 'antd';
import { connect } from 'react-redux';
import { getRecommend  as recommendListAction } from '../../store/actions/index.js';
import { bindActionCreators } from 'redux';
import {HashRouter as Router, Switch, Route, Redirect , Link} from 'react-router-dom';
import './index.scss';

class Recommend extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentWillMount(){
        console.log(this.props.recommendList.data);
    }
    render(){
        return(
            <section className="recommend">
                <Row style={{paddingLeft:'10px' , margin: '20px 0 10px 0', fontSize:'17px',borderLeft:'4px solid #1890ff'}}>推荐歌单</Row>
                <Row gutter={20} type={'flex'} justify={'space-between'}>
                    {
                        this.props.recommendList.data._list.map((ele) => {
                            return (
                                ele.map((el ,index) => {
                                    return (
                                        <Col span={8} style={{paddingBottom: '16px'}} key={index}>
                                            <div className="music-list">
                                                <a href={`https://music.163.com/m/playlist?id=${el.id}`}>
                                                    <span className="listen">{el.playCount}</span>
                                                    <img alt="" src={el.picUrl} />
                                                    <div className="music-text">{el.name}</div>
                                                </a>
                                            </div>
                                        </Col>
                                    )
                                })
                            )
                        })
                    }
                </Row> 
            </section>
        )
    }
}
//注册store
const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = (dispatch) => {
    return {
        recommendListDispatchs : bindActionCreators(recommendListAction , dispatch)
    }
}
export default connect(mapStateToProps)(Recommend);