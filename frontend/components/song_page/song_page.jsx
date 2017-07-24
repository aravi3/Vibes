import React from 'react';
import Audio from 'react-audioplayer';
import { Link } from 'react-router-dom';

class SongPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      song: undefined
    };

    this.renderAudioPlayer = this.renderAudioPlayer.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  addComment(comment) {
    console.log(comment);
  }

  componentDidMount() {
    this.props.fetchSong(this.props.match.params.songId).then(
      () => {
        let song = [{
          name: this.props.song[0].title,
          src: this.props.song[0].track,
          img: this.props.song[0].image,
          comments: [],
          artist: this.props.song[0].artist
        }];

        this.setState({ song });
      }
    );
  }

  renderAudioPlayer() {
    const audioStyles = {
      backgroundColor: 'white',
      width: '600px',
      height: '500px',
      opacity: '0.95',
      position: 'absolute',
      top: '30px',
      left: '220px'
    };

    return (
      <center>
        <div className="show-song-container">
          <Audio
            style={audioStyles}
            comment={true}
            onCommentSubmit={this.addComment}
            fullPlayer={true}
            autoPlay={false}
            playlist={this.state.song}
          />

          <span className="show-song-info">
            {this.state.song[0].name}
            <br />
            <span className="show-song-artist">
              by {this.state.song[0].artist}
            </span>
          </span>
        </div>
      </center>
    );
  }

  render() {
    return (
      <div>
        {this.state.song ? this.renderAudioPlayer() : ""}
      </div>
    );
  }
}

export default SongPage;
