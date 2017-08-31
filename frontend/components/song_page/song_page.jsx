import React from 'react';
import Audio from 'react-audioplayer';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import UploadFormContainer from '../upload/upload_form_container';

class SongPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
      showSong: undefined
    };

    this.renderAudioPlayer = this.renderAudioPlayer.bind(this);
    this.playSong = this.playSong.bind(this);
    this.addCommentBox = this.addCommentBox.bind(this);
    this.setComment = this.setComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
    this.openUploadModal = this.openUploadModal.bind(this);
    this.renderSongDetails = this.renderSongDetails.bind(this);
  }

  playSong(e) {
    e.preventDefault();
    this.props.receiveSong(this.state.showSong);
  }

  setComment(e) {
    e.preventDefault();
    this.setState({ comment: e.target.value });
  }

  addCommentBox() {
    if (!this.props.loggedIn) {
      window.globalSignupModal();
      return;
    }

    let comment = {
      body: this.state.comment,
      user_id: this.props.currentUser.id,
      song_id: parseInt(this.props.match.params.songId)
    };

    this.props.createComment(comment);
    this.setState({ comment: "" });
  }

  deleteComment(id) {
    return e => this.props.deleteComment(id);
  }

  deleteSong(id) {
    return e => {
      this.props.deleteSong(id).then(
        () => this.props.history.push('/api/songs')
      );
    };
  }

  openUploadModal(e) {
    e.preventDefault();
    window.globalUploadModal(parseInt(this.props.match.params.songId));
  }

  componentDidMount() {
    // this.props.fetchSong(parseInt(this.props.match.params.songId));
    this.props.fetchAllSongs().then(
      resp => {
        let showSong = this.props.songs.filter(song => {
          return song.id === parseInt(this.props.match.params.songId);
        });

        this.setState({ showSong: showSong[0] });
      }
    );
    this.props.fetchAllComments(parseInt(this.props.match.params.songId));
    this.props.fetchAllUsers();
    window.scrollTo(0, 0);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.songs[0]) {
  //     if (nextProps.songs[0].title !== this.props.songs[0].title) {
  //       this.props.fetchSong(parseInt(this.props.match.params.songId));
  //       this.props.fetchAllComments(parseInt(this.props.match.params.songId));
  //       this.props.fetchAllUsers();
  //       window.scrollTo(0, 0);
  //     }
  //   }
  // }

  renderAudioPlayer() {
    const audioStyles = {
      backgroundColor: 'transparent',
      width: '600px',
      height: '500px',
      marginRight: '50px',
      marginBottom: '10px'
    };

    return (
      <Audio
        style={audioStyles}
        fullPlayer={true}
        autoPlay={false}
        playlist={[{name: this.state.showSong.title, src: this.state.showSong.track, img: this.state.showSong.image, comments: []}]}
      />
    );
  }

  renderSongDetails() {
    return (
      <span className="show-song-info">
        <i onClick={this.playSong} className="fa fa-play-circle-o fa-lg"></i> {this.state.showSong.title}
        <br />
        <span className="by">by </span><span className="show-song-artist"><Link to={`/api/users/${this.state.showSong.user_id}`}>{this.state.showSong.artist}</Link></span>
        <br />
        <span className="show-song-time">uploaded {this.state.showSong.time} ago</span>
        <br />
        {(this.state.showSong.user_id === this.props.currentUser.id) ?
          <div>
            <button onClick={this.openUploadModal} className="show-modify-button">
              Edit song
            </button>
            <br />
            <button onClick={this.deleteSong(this.state.showSong.id)} className="show-modify-button">
              Delete song
            </button>
          </div> : "" }
      </span>
    );
  }

  render() {
    let comments = this.props.comments.map((comment, idx) => {
      return (
        <div key={`comment-container-${idx}`}>
          {this.props.users[comment.user_id] ?
          <ul style={{listStyleImage: `url(${this.props.users[comment.user_id].profile_img})`}} className="comment-details" key={`comment-${idx}`}>
            <li className="comment-author" key={`comment-author-${idx}`}>
              <Link to={`/api/users/${comment.user_id}`}>{this.props.users[comment.user_id].username}</Link>
            </li>
            <li className="comment-body" key={`comment-body-${idx}`}>{comment.body} <i onClick={this.deleteComment(comment.id)} className="fa fa-times"></i></li>
            <li className="comment-time" key={`comment-time-${idx}`}>{comment.time}</li>
          </ul> : ""}
      </div>
    );
    });

    return (
      <ul className="song-page-container">
        <li className="full-audio-player">
          {this.state.showSong ? this.renderAudioPlayer() : ""}

          <div className="comments-section">
            <ul className="show-comments">
              <span className="show-comments-header">Comments</span>
              <br /><br /><br /><br />
              {comments}
            </ul>

            <div>
              <textarea value={this.state.comment} onChange={this.setComment} className="submit-comment"></textarea>
              <br />
              <center>
                <button onClick={this.addCommentBox} className="submit-comment-button">Submit Comment</button>
              </center>
            </div>
          </div>
        </li>
        <li>
          <br /><br /><br />
          {this.state.showSong ? this.renderSongDetails() : ""}
        </li>
      </ul>
    );
  }
}

export default withRouter(SongPage);
