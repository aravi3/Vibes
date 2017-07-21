import React from 'react';
import { Link } from 'react-router-dom';

class TrendingSongs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllSongs();
  }

  render() {

    let firstRow = this.props.songs.map((song, idx) => {
      return (<img className="trending-songs" key={idx} src={song.image} />);
    });

    return (
      <div>
        <p className="trending-songs-header">
          Hear what's trending in the Vibes community
        </p>

        <br />

        <section className="trending-songs-container">
          <div className="trending-songs-upper">
            {firstRow}
          </div>
          <div className="trending-songs-lower">
          </div>
        </section>
      </div>
    );
  }
}

export default TrendingSongs;
