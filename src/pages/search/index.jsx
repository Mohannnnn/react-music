import React from 'react';
import {
    Row , Col , Layout,Input,Avatar,Menu
} from 'antd';
import {HashRouter as Router, Switch, Route, Redirect , Link} from 'react-router-dom';
import './index.scss';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <section className="search">
                    Search
            </section>
        )
    }
}

export default Search;