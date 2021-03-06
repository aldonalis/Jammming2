import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: '',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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

  removeTrack(track) {
      let tracks = this.state.playlistTracks;
      tracks = tracks.filter(currTrack => {
        if (currTrack.id === track.id) {
          return false;
        }
        else {
          return true;
        }
      })
      this.setState({
        playlistTracks: tracks
      })
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })
  }

  savePlaylist() {
    let tracks = this.state.playlistTracks;
    let trackURIs = tracks.filter(el => {
      return el.uri
    })
  }

  search(term) {
    Spotify.search(term).then(tracks => {
      this.setState({searchResults: tracks})
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
