import { ProfileApi, usersAPI } from '../components/api/api'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'

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
        case DELETE_POST:
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)
            }

        default: return state;
    }
}

export const addPostActionCreator = (addNewPost) => ({ type: ADD_POST, addNewPost })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))

}

export const getStatus = (userId) => async (dispatch) => {
    let response = await ProfileApi.getStatus(userId)
    dispatch(setStatus(response.data))

}

export const updateStatus = (status) => async (dispatch) => {
    let response = await ProfileApi.updateStatus(status)
    if (response.data.resultCode === 0)
        dispatch(setStatus(status))

}

export default profileReducer