import React from 'react';
import {
    Row  , Icon , Spin
} from 'antd';

class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            curSongMsg : {
                "id": "001fXNWa3t8EQQ",
                "name": "我喜欢上你时的内心活动",
                "time": 225,
                "singer": "陈绮贞",
                "url": "https://api.bzqll.com/music/tencent/url?id=001fXNWa3t8EQQ&key=579621905",
                "pic": "https://api.bzqll.com/music/tencent/pic?id=001fXNWa3t8EQQ&key=579621905",
                "lrc": "https://api.bzqll.com/music/tencent/lrc?id=001fXNWa3t8EQQ&key=579621905"
            }
        }
    }
    render(){
        return(
            <div style={{width: '100%',height: '50px',display:'none'}}>
                <audio ref="audioMusic" src={this.state.curSongMsg.url} preload="auto" controls="" autoPlay="true" loop="false" style={{width: '100%', height: '100%', display: 'block'}}></audio>
            </div>  
        )
    }
}

export default Player;