import React from 'react';
import { Link } from 'react-router-dom';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredSongs: [],
      type: "all"
    };

    this.renderSongIndex = this.renderSongIndex.bind(this);
    this.showSongPage = this.showSongPage.bind(this);
    this.playSong = this.playSong.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
    this.likedSongs = this.likedSongs.bind(this);
    this.allSongs = this.allSongs.bind(this);
    this.searchedSongs = this.searchedSongs.bind(this);
  }

  allSongs() {
    this.setState({ type: "all" });
    this.setState({ filteredSongs: this.props.songs });
  }

  searchedSongs() {
    let filteredSongs = this.props.songs.filter(song => {
      return (
        song.title.toLowerCase().includes(this.props.query) ||
        song.artist.toLowerCase().includes(this.props.query)
      );
    });

    this.setState({ filteredSongs });

    return filteredSongs;
  }

  likedSongs() {
    this.setState({ type: "liked" });
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
    let filteredSongs;

    if (this.state.type === "all") {
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

    this.props.fetchAllGenres();

    this.props.fetchAllSongs().then(
      () => {
        if (this.props.search) {
          this.setState({ filteredSongs: this.searchedSongs() });
        }
        else {
          this.setState({ filteredSongs: this.props.songs });
        }
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser.id !== this.props.currentUser.id) {
      this.props.fetchUserLikes(nextProps.currentUser.id);
    }

    if (nextProps.likes.length !== this.props.likes.length) {
      this.props.fetchAllSongs().then(
        () => {
          if (this.state.type === "all") {
            this.setState({ filteredSongs: this.props.songs });
          }
          else if (this.state.type === "liked") {
            this.setState({ filteredSongs: this.likedSongs() });
          }
          else if (this.props.search) {
            this.setState({ filteredSongs: this.searchedSongs() });
          }
        }
      );
    }

    if ((nextProps.query !== this.props.query) && (nextProps.query !== "")) {
      this.props.fetchAllSongs().then(
        () => {
          this.setState({ filteredSongs: this.searchedSongs() });
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
                  <img onClick={this.playSong(song)} className="play-button-index" src="https://res.cloudinary.com/dnj5rmvun/image/upload/v1500611639/play_button_s6vhyu.png"/>
                </div>
              </button>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <span className="song-details">
                <Link to={`/api/users/${song.user_id}`} className="song-artist">{song.artist}</Link>
                <br />
                <Link to={`/api/songs/${song.id}`} className="song-title">{song.title}</Link>
              </span>

              {(likeId && this.state.type !== "liked") ? <img className="liked-status" src="https://res.cloudinary.com/dnj5rmvun/image/upload/v1501122479/check_cream_jemohy.png" /> : ""}
              <span onClick={this.toggleLike(likeId, song.id)} className="like-action">{likeId ? <span>UNLIKE</span> : <span>LIKE</span>}</span>

              <span className="track-likes">{song.likes}</span>
            </div>

            <br /><br /><br />
          </li>
      );
    });

    if (this.state.type === "liked" && this.props.likes.length === 0) {
      return (
        <center>
          <span className='no-liked-songs'>You have not liked any songs yet!</span>
        </center>
      );
    }

    return (
      <ul className="index-listing-container">
        {songs}
      </ul>
    );
  }

  render() {
    let genres = this.props.genres.map((genre, idx) => {
      return (<option key={`genre-track-listing-${idx}`} onClick={this.filterGenre} className="w3-bar-item w3-button" value={genre.id}>{genre.name}</option>);
    });

    return (
      <ul className="song-index">
        <li className="index-col-left">&nbsp;</li>
        <li className="index-col-middle">
          <br /><br />

          <ul className="index-header-container">
            <li>
              {this.props.search ? <span style={{color: '#c64800', borderBottom: '1px solid #c64800'}} className="explore-header">Search Results</span> :
                (this.state.type !== "liked" ? <span style={{color: '#c64800', borderBottom: '1px solid #c64800'}} onClick={this.allSongs} className="explore-header">Discover</span> : <span onClick={this.allSongs} className="explore-header">Discover</span>)}

              {(this.props.loggedIn && !this.props.search) ? (this.state.type === "liked" ? <span style={{color: '#c64800', borderBottom: '1px solid #c64800'}} onClick={this.likedSongs} className="explore-header">Likes</span> : <span onClick={this.likedSongs} className="explore-header">Likes</span>) : ""}

              <br /><br /><br /><br /><br />

              <span className="most-liked">Sorted by most liked</span>

              <br /><br /><br /><br /><br />

              <span className="index-header-left">#</span>
              <span className="index-header-mid">Track</span>
            </li>

            <li>
              <br /><br /><br /><br /><br /><br />

              {!this.props.search ?
                <div className="w3-dropdown-hover">
                  <button className="w3-button">Filter by genre</button>
                  <div className="w3-dropdown-content w3-bar-block w3-border">
                    <option onClick={this.filterGenre} value="All" className="w3-bar-item w3-button">All</option>
                    {genres}
                  </div>
                </div>
                :
                <div className="hide-genres">
                  <div className="w3-dropdown-hover">
                    <button className="w3-button">Filter by genre</button>
                    <div className="w3-dropdown-content w3-bar-block w3-border">
                      <option onClick={this.filterGenre} value="All" className="w3-bar-item w3-button">All</option>
                      {genres}
                    </div>
                  </div>
                </div>}


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
