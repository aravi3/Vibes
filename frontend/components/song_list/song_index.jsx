import React from 'react';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredSongs: []
    };

    this.all = true;

    this.renderSongIndex = this.renderSongIndex.bind(this);
    this.showSongPage = this.showSongPage.bind(this);
    this.playSong = this.playSong.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
    this.likedSongs = this.likedSongs.bind(this);
    this.allSongs = this.allSongs.bind(this);
  }

  allSongs() {
    this.all = true;
    this.setState({ filteredSongs: this.props.songs });
  }

  likedSongs() {
    this.all = false;
    let likedIds = this.props.likes.map(like => like.song_id);

    let filteredSongs = this.props.songs.filter(song => {
      return likedIds.includes(song.id);
    });

    this.setState({ filteredSongs });

    return filteredSongs;
  }

  toggleLike(likeId, songId) {
    let like = {
      user_id: this.props.currentUser.id,
      song_id: songId
    };

    return e => {
      if (!this.props.loggedIn) {
        window.globalSignupModal();
        return;
      }

      if (likeId) {
        this.props.deleteLike(likeId);
      }
      else {
        this.props.createLike(like);
      }
    };
  }

  filterGenre(e) {
    if (e.target.value === "invalid") {
      return;
    }

    let filteredSongs;

    if (this.all) {
      if (e.target.value === "All") {
        this.setState({ filteredSongs: this.props.songs });
        return;
      }

      let genreId = e.target.value;
      genreId = parseInt(genreId);

      filteredSongs = this.props.songs.filter(song => {
        return song.genre_id === genreId;
      });
    }
    else {
      if (e.target.value === "All") {
        this.setState({ filteredSongs: this.likedSongs()});
        return ;
      }

      let genreId = e.target.value;
      genreId = parseInt(genreId);

      filteredSongs = this.likedSongs().filter(song => {
        return song.genre_id === genreId;
      });
    }

    this.setState({ filteredSongs });
  }

  componentDidMount() {
    this.props.fetchUserLikes(this.props.currentUser.id);
    this.props.fetchAllSongs().then(
      () => {
        this.setState({ filteredSongs: this.props.songs });
      }
    );
    this.props.fetchAllGenres();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser.id !== this.props.currentUser.id) {
      this.props.fetchUserLikes(nextProps.currentUser.id);
    }

    if (nextProps.likes.length !== this.props.likes.length) {
      this.props.fetchAllSongs().then(
        () => {
          if (this.all) {
            this.setState({ filteredSongs: this.props.songs });
          }
          else {
            this.setState({ filteredSongs: this.likedSongs()});
          }
        }
      );
    }
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
    let likeId;

    let songs = this.state.filteredSongs.map((song, idx) => {

      likeId = false;

      this.props.likes.forEach(like => {
        if (like.song_id === song.id) {
          likeId = like.id;
        }
      });

      return (
          <li className="track-listing-item" key={`tlli-${idx}`}>
            <div className="indiv-song-background">
              <span className="track-number">{idx+1}</span>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <button onClick={this.showSongPage(song.id)} key={`track-listing-button-${idx}`}>
                <div style={{backgroundImage: `url(${song.image})`}} className="track-listing-image" key={`track-listing-image-${idx}`}>
                  <img onClick={this.playSong(song)} className="play-button-index" src="http://res.cloudinary.com/dnj5rmvun/image/upload/v1500611639/play_button_s6vhyu.png"/>
                </div>
              </button>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <span className="song-details">
                <span className="song-artist">{song.artist}</span>
                <br />
                <span>{song.title}</span>
              </span>

              {likeId ? <img className="liked-status" src="assets/check_mark.png" /> : ""}
              <span onClick={this.toggleLike(likeId, song.id)} className="like-action">{likeId ? <span>UNLIKE</span> : <span>LIKE</span>}</span>

              <span className="track-likes">{song.likes}</span>
            </div>

            <br /><br /><br />
          </li>
      );
    });

    return (
      <ul className="index-listing-container">
          {songs}
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
          <br /><br />

          <ul className="index-header-container">
            <li>
              {this.all ? <span style={{color: '#c64800', borderBottom: '1px solid #c64800'}} onClick={this.allSongs} className="explore-header">Discover</span> : <span onClick={this.allSongs} className="explore-header">Discover</span>}

              {this.props.loggedIn ? (!this.all ? <span style={{color: '#c64800', borderBottom: '1px solid #c64800'}} onClick={this.likedSongs} className="explore-header">Likes</span> : <span onClick={this.likedSongs} className="explore-header">Likes</span>) : ""}

              <br /><br /><br /><br /><br />

              <span className="most-liked">Sorted by most liked</span>

              <br /><br /><br /><br /><br />

              <span className="index-header-left">#</span>
              <span className="index-header-mid">Track</span>
            </li>

            <li>
              <br /><br /><br /><br /><br /><br />

              <select onChange={this.filterGenre}>
                <option value="invalid">Filter by genre</option>
                <option value="All">All</option>
                {genres}
              </select>

              <br /><br /><br /><br /><br />

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
