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
      <div>
        <h1>Create an account</h1>

        <form onSubmit={this.signupUser}>
          <label>Enter your email
            <input onChange={this.setEmail} type="text" value={this.state.email} />
          </label>

          <br />

          <label>Select a username
            <input onChange={this.setUsername} type="text" value={this.state.username} />
          </label>

          <br />

          <label>Select a password
            <input onChange={this.setPassword} type="password" value={this.state.password} />
          </label>

          <br />

          <input type="submit"></input>

          {errors}
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);