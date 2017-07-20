import React from 'react';
import { Link } from 'react-router-dom';

class TrendingSongs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className="trending-songs-header">
          Hear what's trending in the Vibes community
        </p>
      </div>
    );
  }
}

export default TrendingSongs;
