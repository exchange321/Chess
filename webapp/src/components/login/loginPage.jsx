import React from 'react'
import {Link} from 'react-router-dom'

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
                <Link to="/rooms">Rooms</Link>
            </form>
        </div>);   
    }
    submitClick = (e) => {
        e.preventDefault();
        console.log("submit click");
    }
}

export default Login