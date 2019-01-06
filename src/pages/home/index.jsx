import React from 'react';
import {
    Row , Col , Layout,Input,Avatar,Menu
} from 'antd';
import {HashRouter as Router, Switch, Route, Redirect , Link} from 'react-router-dom';
import './index.scss';
import HotList from '../hotList/index';
import Recommend from '../recommend/index';
import Searchs from '../search/index';

const {Header, Content, Footer, Sider} = Layout;
const {Search} = Input;

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Music',
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
                    <Content style={{background:'#fff'}}>
                        <Menu mode='horizontal' defaultSelectedKeys={['recommend']} style={{display:'flex',justifyContent:'space-between'}}>
                            <Menu.Item key="recommend">
                                <Link to={`${this.props.match.url}/recommend`}>推荐音乐</Link>
                            </Menu.Item>
                            <Menu.Item key="hotlist">
                                <Link to={`${this.props.match.url}/hotlist`}>热门歌曲</Link>
                            </Menu.Item>
                            <Menu.Item key="search">
                                <Link to={`${this.props.match.url}/search`}>搜索</Link>
                            </Menu.Item>
                        </Menu>
                        <Switch>
                            <Route path={`${this.props.match.path}/hotlist`} exact component={HotList}/>
                            <Route path={`${this.props.match.path}/recommend`} exact component={Recommend}/>
                            <Route path={`${this.props.match.path}/search`} exact component={Searchs}/>
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
