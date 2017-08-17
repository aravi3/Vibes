import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loading: false
    };

    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.redirectHome = this.redirectHome.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
    else if (this.props.errors) {
      this.setState({ loading: false });
    }
  }

  redirectHome() {
    this.props.history.push('/');
  }

  setUsername(e) {
    const username = e.target.value ? e.target.value : "";
    this.setState({ username });
  }

  setPassword(e) {
    const password = e.target.value ? e.target.value : "";
    this.setState({ password });
  }

  loginUser(e) {
    e.preventDefault();

    const username = this.state.username;
    const password = this.state.password;

    this.setState({
      username: "",
      password: ""
    });

    const user = {
      username: username,
      password: password
    };

    this.setState({ loading: true });
    this.props.login(user).then(this.redirectHome);
  }

  render() {

    let errors = this.props.errors.map((err, idx) => {
      return (<p className="error-messages" key={`login-errors-${idx}`}>{err}</p>);
    });

    return (
      <form className="login-form">
        <label><i className="fa fa-user"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input disabled={this.state.loading} onChange={this.setUsername} placeholder="username" type="text" value={this.state.username}/>
        </label>

        <br /><br />

        <label><i className="fa fa-lock"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input disabled={this.state.loading} onChange={this.setPassword} placeholder="password" type="password" value={this.state.password}/>
        </label>

        <br /><br />
        {errors}
        <br />

        <center>
          <button disabled={this.state.loading} className="splash-button" onClick={this.loginUser}>
            {this.state.loading ? <div className="loader-form"></div> : "Log in"}
          </button>
        </center>
      </form>
    );
  }
}

export default withRouter(LoginForm);
