import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routerActions } from 'react-router-redux';

@connect(
  null,
  dispatch => ({
    routerActions: bindActionCreators(routerActions, dispatch),
  }),
)
class LoginPage extends React.Component {
  static propTypes = {
    routerActions: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  submitClick = (e) => {
    e.preventDefault();
    if (this.state.username === 'admin' && this.state.password === '123456') {
      // eslint-disable-next-line no-console
      console.log('Login successfuly');
      this.props.routerActions.push('/lobby');
    } else {
      // eslint-disable-next-line no-console
      console.log('Login fail.');
    }
  };

  render() {
    const loginContainerStyle = {
      margin: '4% 30%',
    };
    const labelStyle = {
      fontSize: 22,
    };
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Login"
          />
          <div className="login-container" style={loginContainerStyle}>
            <TextField
              hintText="Enter your Username"
              fullWidth
              floatingLabelText="Username"
              style={labelStyle}
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              fullWidth
              floatingLabelText="Password"
              style={labelStyle}
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <br />
            <RaisedButton label="Login" primary fullWidth onClick={this.submitClick} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default LoginPage;
