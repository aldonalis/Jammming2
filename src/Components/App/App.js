import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'a', artist: 'a', album: 'a', id: 1},
        {name: 'a', artist: 'a', album: 'a', id: 2},
        {name: 'a', artist: 'a', album: 'a', id: 3}
      ],
      playlistName: 'Ada Playlist',
      playlistTracks: [
        {name: 'b', artist: 'b', album: 'b', id: 4},
        {name: 'b', artist: 'b', album: 'b', id: 5},
        {name: 'b', artist: 'b', album: 'b', id: 6}
      ]
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (!tracks.includes(track.id)) {
      tracks.push(track.id);
    }
    this.setState({
      playlistTracks: tracks
    })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
