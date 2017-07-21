import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: ""
    };

    this.setEmail = this.setEmail.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.signupUser = this.signupUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  setEmail(e) {
    const email = e.target.value ? e.target.value : "";
    this.setState({ email });
  }

  setUsername(e) {
    const username = e.target.value ? e.target.value : "";
    this.setState({ username });
  }

  setPassword(e) {
    const password = e.target.value ? e.target.value : "";
    this.setState({ password });
  }

  signupUser() {
    const email = this.state.email;
    const username = this.state.username;
    const password = this.state.password;

    this.setState({
      email: "",
      username: "",
      password: ""
    });

    const user = {
      email: email,
      username: username,
      password: password
    };

    this.props.signup(user);
  }

  render() {

    let errors = this.props.errors.map((err, idx) => {
      return (<p key={`signup-errors-${idx}`}>{err}</p>);
    });

    return (
      <form className="signup-form">
        <label><i className="fa fa-envelope"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input onChange={this.setEmail} placeholder="email" type="text" value={this.state.email} />
        </label>

        <br /><br />

        <label><i className="fa fa-user"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input onChange={this.setUsername} placeholder="username" type="text" value={this.state.username} />
        </label>

        <br /><br />

        <label><i className="fa fa-lock"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input onChange={this.setPassword} placeholder="password" type="password" value={this.state.password} />
        </label>

        <br /><br />
        {errors}
        <br />

        <center>
          <button className="splash-button" onClick={this.signupUser}>Create Account</button>
        </center>
      </form>
    );
  }
}

export default withRouter(SignupForm);
