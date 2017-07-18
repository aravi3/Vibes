import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <button onClick={this.logoutUser}>Log out</button>
      </div>
    );
  }
}

export default Navbar;
