import React, { Component } from 'react';
import Login from './login/loginPage.jsx'
import VisibleRooms from './room-list/roomListPage.jsx'


class AppContainer extends Component {
    render() {
        return (
            <div className="app-container">
                <HashRouter>
                    <div>
                    <Route exact path="/" component={Login} />
                    <Route path="/rooms" component={VisibleRooms} />
                    </div>
                </HashRouter>
            </div>
        );
    }
}
export default AppContainer;