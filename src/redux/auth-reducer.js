import { usersAPI } from '../components/api/api'
const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {

    userId: null,
    email: null,
    login: null,
    isAuth: false



};


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                // isAuth: true
            }


        default: return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })

export const getAuthUserData = () => (dispatch) => {
    return usersAPI.authorization().then(response => {
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })

}


export const LoginApi = (email, password, rememberMe) => (dispatch) => {
    usersAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } 
        
    })

}
export const LogOutApi = () => (dispatch) => {
    usersAPI.logOut().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })

}



export default authReducer;