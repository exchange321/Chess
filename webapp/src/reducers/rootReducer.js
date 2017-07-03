import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import roomListReducer from './roomListReducer'
import roomDetailReducer from './roomDetailReducer'
const rootReducer=combineReducers(
    {
        loginPage: loginReducer,
        roomListPage: roomListReducer,
        roomDetailPage:roomDetailReducer
    }
)

export default rootReducer;
