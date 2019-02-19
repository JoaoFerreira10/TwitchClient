import React from 'react';

const VideoShow = ({video}) => {

    if(!video)
    return <div>No video selected</div>;

    const videoSrc = "https://player.twitch.tv/?channel=" + video.channel.name;

    return (<div>
        <h3 className="ui header">{video.game}</h3>
        <div className="ui embed">
            <iframe src={videoSrc} />
        </div>
        <div className="ui segment">  
        <div className="ui grid">
            <div className="twelve wide column">
                <span className="item-header">{video.channel.status}</span>
            </div>
            <div className="four wide column">
                <span>{video.viewers} viewers</span>
            </div>
            </div>                                  
        </div>
        </div>);
}

export default VideoShow;

