import React from 'react';
import {
    Row , Col , Card
} from 'antd';
import {HashRouter as Router, Switch, Route, Redirect , Link} from 'react-router-dom';
import './index.scss';

const { Meta } = Card;
class Recommend extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <section className="recommend">
                <Row style={{paddingLeft:'10px' , margin: '20px 0 10px 0', fontSize:'17px',borderLeft:'4px solid #1890ff'}}>推荐歌单</Row>
                <Row gutter={20} type={'flex'} justify={'space-between'}>
                    <Col span={8} style={{paddingBottom: '16px'}}>
                        <div className="music-list">
                            <span className="listen">1212</span>
                            <img alt="" src="http://p2.music.126.net/XYvUpABXoRW12bvDNJYZeg==/109951163662814383.webp?imageView&thumbnail=323x0&quality=75&tostatic=0&type=webp" />
                            <div className="music-text">哪里着火了啊师傅，有警报声</div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="music-list">
                            <span className="listen">1212</span>
                            <img alt="" src="http://p2.music.126.net/XYvUpABXoRW12bvDNJYZeg==/109951163662814383.webp?imageView&thumbnail=323x0&quality=75&tostatic=0&type=webp" />
                            <div className="music-text">哪里着火了啊师傅，有警报声</div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="music-list">
                            <span className="listen">1212</span>
                            <img alt="" src="http://p2.music.126.net/XYvUpABXoRW12bvDNJYZeg==/109951163662814383.webp?imageView&thumbnail=323x0&quality=75&tostatic=0&type=webp" />
                            <div className="music-text">哪里着火了啊师傅，有警报声</div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="music-list">
                            <span className="listen">1212</span>
                            <img alt="" src="http://p2.music.126.net/XYvUpABXoRW12bvDNJYZeg==/109951163662814383.webp?imageView&thumbnail=323x0&quality=75&tostatic=0&type=webp" />
                            <div className="music-text">哪里着火了啊师傅，有警报声</div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="music-list">
                            <span className="listen">1212</span>
                            <img alt="" src="http://p2.music.126.net/XYvUpABXoRW12bvDNJYZeg==/109951163662814383.webp?imageView&thumbnail=323x0&quality=75&tostatic=0&type=webp" />
                            <div className="music-text">哪里着火了啊师傅，有警报声</div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="music-list">
                            <span className="listen">1212</span>
                            <img alt="" src="http://p2.music.126.net/XYvUpABXoRW12bvDNJYZeg==/109951163662814383.webp?imageView&thumbnail=323x0&quality=75&tostatic=0&type=webp" />
                            <div className="music-text">哪里着火了啊师傅，有警报声</div>
                        </div>
                    </Col>
                </Row> 
            </section>
        )
    }
}

export default Recommend;