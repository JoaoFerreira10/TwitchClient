import React from 'react';
import '../content/style.css';
import twitchLogo from '../content/twitch.jpg';
import { Link, Redirect, withRouter } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class SearchBar extends React.Component {

    state = {search : '', numberOfSearchs: (localStorage.getItem("numOfSearchs") != null ? localStorage.getItem("numOfSearchs"): '8') }
    

    onInputChange = (event) => {
        this.setState({search : event.target.value});
    }

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.search, this.state.numberOfSearchs);
        this.props.history.push('/List');
    }

    _onSelect = event => {
        localStorage.setItem("numOfSearchs", event.value);
        this.setState({numberOfSearchs: event.value});
    }

    render() {
        return (
        <div id="search-bar-content" className="ui segment">
            <img src={twitchLogo} width="60px" />
            <div className="ui grid">
                <div className="thirteen wide column">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                        <input type="text" value={this.state.search} onChange={this.onInputChange} placeholder="Search stream..." />
                        </div>
                    </form>
                </div>
                <div className="one wide column label-column">
                    <span className="dropdown-label">Show:</span>
                </div>
                <div className="two wide column">
                <Dropdown options={['8','12','20']} onChange={this._onSelect} value={this.state.numberOfSearchs} placeholder="Streams" />
                </div>
            </div>
        </div>
        );
    }
}

export default withRouter(SearchBar);