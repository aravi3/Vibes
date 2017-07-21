import React from 'react';
import ReactDOM from 'react-dom';
import Audio from 'react-audioplayer';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.renderAudioPlayer = this.renderAudioPlayer.bind(this);
    this.remountCount = 0;
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentSong !== this.props.currentSong) {
      if (this.audioComponent) {
        ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-pause'));
      }

      this.remountCount = (this.remountCount + 1) % 5;
    }
  }

  renderAudioPlayer() {
    const audioStyles = {
      width: `${screen.width}px`,
      position: 'fixed',
      bottom: '0',
      backgroundColor: 'white'
    };

    const currentSongName = this.props.songs[this.props.currentSong].title;
    const currentSongSrc = this.props.songs[this.props.currentSong].track;

    return (
        <Audio
          key={this.remountCount}
          style={audioStyles}
          autoPlay={true}
          playlist={[{name: currentSongName, src: currentSongSrc}]}
          ref={audioComponent => { this.audioComponent = audioComponent;}}
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
