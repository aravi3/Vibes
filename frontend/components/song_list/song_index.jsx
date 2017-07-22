import React from 'react';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllSongs();
    this.props.fetchAllGenres();
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

              <span className="index-header-right">Likes</span>
            </li>
          </ul>

          <ul className="index-listing-container">
            <li>
            </li>

            <li>
            </li>
          </ul>
        </li>
        <li className="index-col-right">&nbsp;</li>
      </ul>
    );
  }
}

export default SongIndex;
