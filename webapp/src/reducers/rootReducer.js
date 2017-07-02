import {combineReducers} from 'redux'

import roomListReducer from './roomListReducer'

const rootReducer=combineReducers(
    {
        roomListPage: roomListReducer
    }
)

export default rootReducer;