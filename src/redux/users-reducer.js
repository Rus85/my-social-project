import { usersAPI, followApi, unfollowApi } from './../components/api/api'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_FETCHING = 'TOGGLE-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'


let initialState = {
    users: [],
        
        pageSize: 100,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: false

    

};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.usersId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }


        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.usersId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

            case SET_USERS: {
                return {...state, users: action.users}
            }
            
            case SET_CURRENT_PAGE: {
                return {...state, currentPage: action.currentPage}
            }
            case SET_TOTAL_USERS_COUNT: {
                return {...state, totalUsersCount: action.count}
            }
            case TOGGLE_FETCHING: {
                return {...state, isFetching: action.isFetching}
            }
            case TOGGLE_IS_FOLLOWING_PROGRESS: {
                return {...state, followingInProgress: action.isFetching}
            }

        default: return state;
    }
}

export const followSuccess = (usersId) => ({ type: FOLLOW, usersId })
export const unfollowSuccess = (usersId) => ({ type: UNFOLLOW, usersId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const setIsFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching (true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetching (false))
                dispatch(setUsers(data.items))
                dispatch(setUsersTotalCount(data.totalCount))
                dispatch(setCurrentPage(currentPage))
    })
}
}

export const follow = (usersId) => {
    return (dispatch) => {
        followApi.subscribe(usersId)
        dispatch(followSuccess(usersId))
    }
}

export const unfollow = (usersId) => {
    return (dispatch) => {
        unfollowApi.unsubscribe(usersId)
        dispatch(unfollowSuccess(usersId))
    }
}

export default usersReducer