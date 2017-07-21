import React from 'react';
import { Link } from 'react-router-dom';

class TrendingSongs extends React.Component {
  constructor(props) {
    super(props);

    this.playSong = this.playSong.bind(this);
  }

  playSong(song) {
    return e => this.props.receiveSong(song);
  }

  componentDidMount() {
    this.props.fetchAllSongs();
  }

  render() {

    let firstRow = this.props.songs.slice(0, 4).map((song, idx) => {
      return (<div style={{backgroundImage: `url(${song.image})`}} className="trending-songs" key={`trending-upper-${idx}`}><img onClick={this.playSong(song)} className="play-button" src="http://res.cloudinary.com/dnj5rmvun/image/upload/v1500611639/play_button_s6vhyu.png"/></div>);
    });

    let secondRow = this.props.songs.slice(4, 8).map((song, idx) => {
      return (<div style={{backgroundImage: `url(${song.image})`}} onClick={this.playSong(song)} className="trending-songs" key={`trending-lower-${idx}`}><img className="play-button" src="http://res.cloudinary.com/dnj5rmvun/image/upload/v1500611639/play_button_s6vhyu.png"/></div>);
    });

    return (
      <section className="trending-songs-container">
        <div className="trending-songs-upper">
          {firstRow}
        </div>

        <br /><br /><br />

        <div className="trending-songs-lower">
          {secondRow}
        </div>
      </section>
    );
  }
}

export default TrendingSongs;
