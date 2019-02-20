import React from 'react';
import {
    Row  , Icon , Spin
} from 'antd';

class Loading extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <Row type={'flex'} justify={'center'} align={'middle'} style={{padding:'50px',width: '100%'}}>
                {/* <Icon type='loading' style={{fontSize:'35px' , color: '#7caeff'}}/> */}
                <Spin tip="Loading..." />
            </Row>
        )
    }
}

export default Loading;