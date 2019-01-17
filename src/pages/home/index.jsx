/*
 * @Author: wuhan  [https://github.com/Mohannnnn] 
 * @Date: 2019-01-11 14:58:26 
 * @Last Modified by: wuhan
 * @Last Modified time: 2019-01-17 10:36:31
 */
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
            curRoute : 'recommend',
            routes :{
                recommend : 'recommend',
                hotlist : 'hotlist',
                search : 'search'
            }
        }
    }
    componentWillMount(){
        console.log(this.props.location.pathname.slice(6))
        const pathname = this.props.location.pathname.slice(6);
        if(this.state.routes[pathname]){
            this.setState({
                curRoute : this.state.routes[pathname]
            })
        }
    }
    render(){
        return (
            <div className="home">
                <Layout>
                    <Header style={{background:'#1890ff',padding:'0 10px', position: 'sticky', top: 0,left: 0 ,zIndex:10}}>
                        <Row align={'middle'} type={'flex'} justify={'space-between'}>
                            <Col>
                                <Avatar src={'../../assets/images/logo.svg'} size={'large'}></Avatar>
                            </Col>
                            <Col span={7} style={{color:'#fff',fontSize:'16px'}}>{this.state.title}</Col>
                            <Col span={14}>
                                <Search placeholder="请输入搜索内容" onSearch={value => console.log(value)}></Search>
                            </Col>
                        </Row>
                    </Header>
                    <Content style={{background:'#fff' , overflow:'hidden'}}>
                        <Menu mode='horizontal' defaultSelectedKeys={[this.state.curRoute]} style={{display:'flex',justifyContent:'space-between'}}>
                            <Menu.Item key={this.state.routes.recommend}>
                                <Link to={`${this.props.match.url}/${this.state.routes.recommend}`}>推荐音乐</Link>
                            </Menu.Item>
                            <Menu.Item key={this.state.routes.hotlist}>
                                <Link to={`${this.props.match.url}/${this.state.routes.hotlist}`}>热门歌曲</Link>
                            </Menu.Item>
                            <Menu.Item key={this.state.routes.search}>
                                <Link to={`${this.props.match.url}/${this.state.routes.search}`}>搜索</Link>
                            </Menu.Item>
                        </Menu>
                        <Switch>
                            <Route path={`${this.props.match.path}/${this.state.routes.hotlist}`} exact component={HotList}/>
                            <Route path={`${this.props.match.path}/${this.state.routes.search}`} exact component={Searchs}/>
                            <Route path={`${this.props.match.path}/:${this.state.routes.recommend}?`} exact component={Recommend}/>
                        </Switch>
                    </Content>
                    <Footer style={{background:'#fff',padding:'0 10px'}}>
                        
                    </Footer>
                </Layout>
            </div>
        )
    }
}

export default Home;
