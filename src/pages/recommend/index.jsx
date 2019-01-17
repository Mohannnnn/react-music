import React from 'react';
import {
    Row , Col ,
} from 'antd';
import { connect } from 'react-redux';
import { getAlbumList as albumListAction } from '../../store/actions/index.js';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { getAlbumList } from "../../api/getData.js";
import Loading from '../../components/Loading';
import './index.scss';

class Recommend extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentWillMount(){
        getAlbumList().then(res => {
            this.props.albumListDispatchs(res.data);
        })
    }
    render(){
        return(
            <section className="recommend">
                <Row style={{paddingLeft:'10px' , margin: '20px 0 10px 0', fontSize:'17px',borderLeft:'4px solid #1890ff'}}>推荐歌单</Row>
                <Row gutter={10} type={'flex'} justify={'space-between'}>
                    {
                        this.props.albumList == '' ? <Loading /> : this.props.albumList.map((ele , index) => {
                            return (
                                <Col span={8} style={{paddingBottom: '10px'}} key={index}>
                                    <div className="music-list">
                                        <Link to={`/album?id=${ele.id}`}>
                                            <span className="listen">{ele.playCount}</span>
                                            <img alt="" src={ele.coverImgUrl} />
                                            <div className="music-text">{ele.title}</div>
                                        </Link>
                                    </div>
                                </Col>
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
        albumListDispatchs : bindActionCreators(albumListAction , dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Recommend);