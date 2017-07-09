import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginPageActions from '../../actions/loginActions';
import TextField from '../common/MaterialTextField.jsx';

@connect(
  ({ loginPage }) => ({
    ...loginPage,
  }),
  dispatch => ({
    actions: bindActionCreators(loginPageActions, dispatch),
  }),
)
class LoginPage extends React.Component {
  static propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    errors: PropTypes.objectOf(PropTypes.string).isRequired,
    actions: PropTypes.shape({
      handleLoginFieldChange: PropTypes.func.isRequired,
      handleLoginFormSubmit: PropTypes.func.isRequired,
    }).isRequired,
  };
  state = {
    loggingIn: false,
  };
  handleLoginFieldChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.props.actions.handleLoginFieldChange(key, value);
  };
  submitClick = (e) => {
    e.preventDefault();
    this.setState({
      loggingIn: true,
    });
    this.props.actions.handleLoginFormSubmit().then().catch(() => {
      this.setState({
        loggingIn: false,
      });
    });
  };

  render() {
    const { email, password, errors } = this.props;
    return (
      <div className="login-page">
        <div className="login-container col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 align-self-center">
          <form>
            <div className="input-container">
              <TextField
                type="email"
                name="email"
                label="Email Address"
                value={email}
                onChange={this.handleLoginFieldChange}
                errors={errors}
              />
            </div>
            <div className="input-container">
              <TextField
                type="password"
                name="password"
                label="Password"
                value={password}
                onChange={this.handleLoginFieldChange}
                errors={errors}
              />
            </div>
            <div className="button-container">
              <RaisedButton
                type="submit"
                label={this.state.loggingIn ? 'Logging In...' : 'Login'}
                disabled={this.state.loggingIn}
                primary
                fullWidth
                onClick={this.submitClick}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
