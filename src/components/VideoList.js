import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, showVideo}) => {

    if(!videos)
        return <div>No results</div>;

    const videoList = videos.map( video => <VideoItem key={video._id} video={video} showVideo={showVideo}/>);
    
    return (<div className="ui stackable grid">
            {videoList}
            </div>);
    
}

export default VideoList;