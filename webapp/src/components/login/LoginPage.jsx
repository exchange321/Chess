import React from 'react';

class LoginPage extends React.Component {
  submitClick = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('submit click');
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
