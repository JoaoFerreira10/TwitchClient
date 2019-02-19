import React from 'react';
import {Link} from 'react-router-dom';

const VideoItem = ({video, showVideo}) => {

    return (<div onClick={() => showVideo(video)} className="four wide column">
                <Link to={{pathname: "/Stream", state:{video}}} >
                    <div className="ui segment item">
                        <img className="ui centered image" src={video.preview.large}/>
                        <div className="content">
                            <div className="ui sub header item-header">{video.game}</div>
                            <p>{video.viewers} viewers</p>
                        </div>           
                    </div>
                </Link>
            </div>);
}

export default VideoItem;