import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (<div>
            <form>
                <div className="form-group">
                    <label>Username:</label>
                    <input className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-default" onClick={this.submitClick}>Submit</button>
            </form>
        </div>);   
    }
    submitClick = (e) => {
        e.preventDefault();
        console.log("submit click");
    }
}

export default Login