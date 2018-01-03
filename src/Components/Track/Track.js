import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.renderAction = this.renderAction.bind(this);
    this.addTrack = this.addTrack.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <a className="Track-action" onClick={this.addTrack}>-</a>
    }
    else {
      return <a className="Track-action">+</a>
    }
  }

  addTrack() {
    if (this.props.onAdd) {
      this.props.track
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action">{this.renderAction()}</a>
      </div>
    )
  }
}

export default Track;