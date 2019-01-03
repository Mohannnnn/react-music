import React from 'react';
import {
    Row , Col , Layout,Input,Avatar,Menu
} from 'antd';
import {HashRouter as Router, Switch, Route, Redirect , Link} from 'react-router-dom';
import './index.scss';
import HotList from '../hotList/index';
import Recommend from '../recommend/index';
import moduleName from '../search/index';

const {Header, Content, Footer, Sider} = Layout;
const {Search} = Input;

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Music',
            collapsed: false
        }
    }
    componentDidMount(){
        console.log(this.props.match)
    }
    render(){
        return (
            <div className="home">
                <Layout>
                    <Header style={{background:'#1890ff',padding:'0 10px'}}>
                        <Row align={'middle'} type={'flex'} justify={'space-between'}>
                            <Col>
                                <Avatar src={'../../assets/images/logo.svg'}></Avatar>
                            </Col>
                            <Col span={7} style={{color:'#fff',fontSize:'16px'}}>{this.state.title}</Col>
                            <Col span={14}>
                                <Search placeholder="请输入搜索内容" onSearch={value => console.log(value)}></Search>
                            </Col>
                        </Row>
                    </Header>
                    <Content style={{background:'#fff',padding:'0 10px'}}>
                        <Link to={`${this.props.match.url}/hotlist`}>layout</Link>
                        <Switch>
                            <Route path={`${this.props.match.path}/hotlist`} exact component={HotList}/>
                        </Switch>
                    </Content>
                    <Footer style={{background:'#fff',padding:'0 10px'}}>
                        Footer
                    </Footer>
                </Layout>
            </div>
        )
    }
}

export default Home;
