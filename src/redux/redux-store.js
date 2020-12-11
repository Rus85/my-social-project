import {combineReducers, createStore} from 'redux';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import friendsReducer from './friends-reducer';

// const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    friendsPage: friendsReducer
    
});

let store = createStore(reducers);


export default store;