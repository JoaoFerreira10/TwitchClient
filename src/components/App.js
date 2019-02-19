import React from 'react';
import SearchBar from './SearchBar';
import twitch from '../api/twitch';
import VideoList from './VideoList';
import VideoShow from './VideoShow';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {

    state = {videos: [], loader: false, selectedVideo: null, term: null, numberOfSearchs: null, first: true};

    showVideo = (video) => {
        this.setState({selectedVideo: video});
    }

    
    refreshVideoList = (numberOfSearchs) => {
        setInterval(() =>{ 
            this.getStreams(this.state.term, this.state.numberOfSearchs);
        }, 10000);
    }

    getStreams = (term, numberOfSearchs) => {
        this.setState({loader: true});      
        twitch.getInstance().getStreamsByDescription(term, numberOfSearchs).then(data => {
            this.setState({videos : data.streams, loader: false});
        });
    };

    onSearchSubmit = async (term, numberOfSearchs) => {
        await this.getStreams(term, numberOfSearchs);
        this.setState({term, numberOfSearchs});

        if(this.state.first) {
            this.refreshVideoList();
            this.setState({first: false});
        }

    }

    render(){
       return(
            <div className="ui container">
            <div id="loader" className= {"ui " + (this.state.loader? "active":"") + " loader"}></div>
            <BrowserRouter>
            <div>
            <SearchBar onFormSubmit={this.onSearchSubmit}/>
            <Route path="/List" exact render={ () => <VideoList videos={this.state.videos} showVideo={this.showVideo} />} />
            <Route path="/Stream" exact render={ () => <VideoShow video={this.state.selectedVideo}/>} />
            </div>
            </BrowserRouter>
           </div>
       ); 
    }
}

export default App;