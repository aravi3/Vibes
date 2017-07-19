import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="home">
        <li className="col-left">&nbsp;</li>
        <li className="col-middle">
          <img className="hero" src="assets/chance.jpg" />
        </li>
        <li className="col-right">&nbsp;</li>
      </ul>
    );
  }
}

export default Home;
