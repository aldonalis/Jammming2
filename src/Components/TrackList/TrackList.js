import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks && this.props.tracks.map((track, id) => {
          return (
            <Track
              key={id}
              track={track}
              isRemoval={this.props.isRemoval}
              onAdd={this.props.onAdd}
            />
          );
        })}
      </div>
    )
  }
}

export default TrackList;
