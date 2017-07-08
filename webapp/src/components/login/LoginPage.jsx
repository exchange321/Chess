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
  submitClick = (e) => {
    e.preventDefault();
    this.props.routerActions.push('/lobby');
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input id="username" name="username" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-default" onClick={this.submitClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
