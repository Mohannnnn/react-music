import React from 'react';
import {
    Row , Col , Layout,Input
} from 'antd';
import {HashRouter as Router, Switch, Route, Redirect , Link} from 'react-router-dom';
import { setLocalStorage , getLocalStorage , delLocalStorage } from '../../utils/tools';
import './index.scss';

const SearchComponent = Input.Search;
class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchStorageName : 'searchStorage',
            searchStorageArr : []
        }
        this.startSearch = this.startSearch.bind(this);
    }
    static getDerivedStateFromProps(nextProps,prevState){
        if(prevState.searchStorageArr == ''){
            return {
                searchStorageArr : getLocalStorage(prevState.searchStorageName)
            }
        }
        // console.log(nextProps,prevState)
        return null;
    }
    startSearch(value){
        if(value != '') {
            setLocalStorage(value , this.state.searchStorageName);
            this.setState({
                searchStorageArr : getLocalStorage(this.state.searchStorageName)
            })
        }
    }
    render(){
        return(
            <section className="search">
                <Row type='flex' align='middle' justify='center' style={{padding:'10px 5px'}}>
                    <Col span={24}>
                        <SearchComponent placeholder="请输入搜索内容" onSearch={ val => this.startSearch(val)} ></SearchComponent>
                    </Col>
                </Row>
                <Row type='flex' align='top' justify='center' style={{flexDirection:'column',padding:'5px'}}>
                    <Col>搜索历史</Col>
                    <Row type='flex' align='middle' justify='start' style={{paddingTop:'10px',fontSize:'14px'}}>
                        {
                            this.state.searchStorageArr == ''? '' : this.state.searchStorageArr.map((ele ,index) => {
                                return (
                                    <Col style={{padding:'0px 15px' , border:'1px solid #d3d4da' , borderRadius:'15px' , lineHeight:'32px' ,margin: '0 10px 10px 0'}} key={index}>{ele}</Col>
                                )
                            })
                        }
                    </Row>
                </Row>
            </section>
        )
    }
}

export default Search;