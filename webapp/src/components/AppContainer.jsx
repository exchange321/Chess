import React, { Component } from 'react';
import LoginPage from './login/loginPage.jsx'
import RoomListPage from './room-list/roomListPage.jsx'
import RoomDetailPage from './room-detail/roomDetailPage.jsx'
import {HashRouter, BrowserRouter, Route, Switch} from 'react-router-dom'

class AppContainer extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="app-container">
                    <div>
                    <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/rooms" component={RoomListPage} />
                    <Route exact path="/roomDetail" component={RoomDetailPage} />
                    </Switch>
                    </div>
            </div>
            </BrowserRouter>
        );
    }
}
export default AppContainer;