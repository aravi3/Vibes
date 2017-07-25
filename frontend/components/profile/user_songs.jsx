import React from 'react';
import { Link } from 'react-router-dom';

class UserSongs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredSongs: []
    };

    this.renderSongs = this.renderSongs.bind(this);
    this.showSongPage = this.showSongPage.bind(this);
    this.playSong = this.playSong.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
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

  componentDidMount() {
    this.props.fetchUserLikes(this.props.currentUser.id);
    this.props.fetchAllSongs().then(
      () => {
        let filteredSongs = this.props.songs.filter(song => {
          return song.user_id === this.props.userId;
        });

        this.setState({ filteredSongs });
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
          let filteredSongs = this.props.songs.filter(song => {
            return song.user_id === this.props.userId;
          });

          this.setState({ filteredSongs });
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

  renderSongs() {
    let likeId;

    let songs = this.state.filteredSongs.map((song, idx) => {

      likeId = false;

      this.props.likes.forEach(like => {
        if (like.song_id === song.id) {
          likeId = like.id;
        }
      });

      return (
        <li className="user-track-listing-item" key={`utlli-${idx}`}>
          <div className="user-indiv-song-background">
            <span className="user-track-number">{idx+1}</span>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <button onClick={this.showSongPage(song.id)} key={`user-track-listing-button-${idx}`}>
              <div style={{backgroundImage: `url(${song.image})`}} className="user-track-listing-image" key={`user-track-listing-image-${idx}`}>
                <img onClick={this.playSong(song)} className="user-play-button-index" src="http://res.cloudinary.com/dnj5rmvun/image/upload/v1500611639/play_button_s6vhyu.png"/>
              </div>
            </button>

            <Link to={`/api/songs/${song.id}`} className="user-song-details">{song.title}</Link>

            {likeId ? <img className="user-liked-status" src="assets/check_mark.png" /> : ""}
            <span onClick={this.toggleLike(likeId, song.id)} className="user-like-action">{likeId ? <span>UNLIKE</span> : <span>LIKE</span>}</span>

            <span className="user-track-likes">{song.likes}</span>
          </div>

          <br /><br /><br />
        </li>
      );
    });

    return (
      <ul className="user-index-listing-container">
          {songs}
      </ul>
    );
  }

  render() {
    return (
      <ul className="user-index-header-container">
        <li>
          <span className="user-explore-header">Songs</span>

          <br /><br /><br /><br /><br />

          <span className="user-most-liked">Sorted by most liked</span>

          <br /><br /><br />

          <span className="user-index-header-left">#</span>
          <span className="user-index-header-mid">Track</span>
        </li>

        <li>
          <center>
            <span className="user-index-header-right">Likes</span>
          </center>
        </li>

        {this.renderSongs()}

      </ul>
    );
  }
}

export default UserSongs;
