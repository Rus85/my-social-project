import {ProfileApi, usersAPI} from '../components/api/api'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialState = {
    posts: [
        { id: 1, message: 'Holla', likesCount: 50 },
        { id: 2, message: 'Hello', likesCount: 200 },
    ],
    profile: null,
    status: ''
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.addNewPost,
                likesCount: 3
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                addNewPost: ''
            }

        case SET_USER_PROFILE: 
            return {
                ...state, profile: action.profile
            }
            case SET_STATUS: 
            return {
                ...state, 
                status: action.status
            }

        default: return state;
    }
}

export const addPostActionCreator = (addNewPost) => ({ type: ADD_POST, addNewPost })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
            
    
        })
    }

}

export const getStatus = (userId) => {
    return (dispatch) => {
        ProfileApi.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
            
    
        })
    }

}

export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileApi.updateStatus(status).then(response => {
            if (response.data.resultCode === 0)
            dispatch(setStatus(status))
            
    
        })
    }

}



export default profileReducer