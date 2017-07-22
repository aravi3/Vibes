import React from 'react';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);

    this.renderSongIndex = this.renderSongIndex.bind(this);
    this.showSongPage = this.showSongPage.bind(this);
    this.playSong = this.playSong.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllSongs();
    this.props.fetchAllGenres();
  }

  showSongPage(id) {
    return e => {
      e.preventDefault();
      this.props.history.push(`/api/songs/${id}`);
    };
  }

  playSong(song) {
    return e => {
      e.preventDefault();
      e.stopPropagation();
      this.props.receiveSong(song);
    };
  }

  renderSongIndex() {
    let songs = this.props.songs.map((song, idx) => {
      return (
          <li className="track-listing-left-item" key={idx}>
            <span className="track-number">{idx+1}</span>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <button onClick={this.showSongPage(song.id)} key={`track-listing-button-${idx}`}>
              <div style={{backgroundImage: `url(${song.image})`}} className="track-listing-image" key={`track-listing-image-${idx}`}>
                <img onClick={this.playSong(song)} className="play-button" src="http://res.cloudinary.com/dnj5rmvun/image/upload/v1500611639/play_button_s6vhyu.png"/>
              </div>
            </button>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <span className="song-details">
              <span className="song-artist">{song.artist}</span>
              <br />
              <span>{song.title}</span>
            </span>

            <br /><br /><br />
          </li>
      );
    });

    return (
      <ul className="index-listing-container">
        <ul className="track-listing-left">
          {songs}
        </ul>

        <li>
        </li>
      </ul>
    );
  }

  render() {
    let genres = this.props.genres.map((genre, idx) => {
      return (<option key={`genre-track-listing-${idx}`} value={genre.id}>{genre.name}</option>);
    });

    return (
      <ul className="song-index">
        <li className="index-col-left">&nbsp;</li>
        <li className="index-col-middle">
          <br /><br /><br />

          <ul className="index-header-container">
            <li>
              <br /><br /><br /><br />

              <span className="index-header-left">#</span>
              <span className="index-header-mid">Track</span>
            </li>

            <li>
              <select>
                <option value="invalid">Filter by genre</option>
                {genres}
              </select>

              <br /><br /><br /><br />

              <center>
                <span className="index-header-right">Likes</span>
              </center>
            </li>
          </ul>

          <br /><br />

          {this.renderSongIndex()}

        </li>
        <li className="index-col-right">&nbsp;</li>
      </ul>
    );
  }
}

export default SongIndex;
