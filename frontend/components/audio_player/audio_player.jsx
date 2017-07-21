import React from 'react';
import Audio from 'react-audioplayer';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.renderAudioPlayer = this.renderAudioPlayer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("Next Props: " + nextProps.currentSong);
    console.log("This Props: " + this.props.currentSong);

    if (nextProps.currentSong !== this.props.currentSong) {
    }
  }

  renderAudioPlayer() {
    const audioStyles = {
      width: `${screen.width}px`,
      position: 'fixed',
      bottom: '0'
    };

    const currentSongName = this.props.songs[this.props.currentSong].title;
    const currentSongSrc = this.props.songs[this.props.currentSong].track;

    return (
        <Audio
          style={audioStyles}
          autoPlay={true}
          playlist={[{name: currentSongName, src: currentSongSrc}]}
        />
    );
  }

  render() {
    if (this.props.currentSong) {
      return this.renderAudioPlayer();
    }
    else {
      return (<span></span>);
    }
  }
}

export default AudioPlayer;
