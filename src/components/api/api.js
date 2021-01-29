import React from 'react';
import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY' : 'c4d7b970-ef03-4f21-af5d-a995a1b6fcd3'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please ProfileApi object.')
       return ProfileApi.getProfile(userId)
    },

    authorization() {
        return instance.get(`auth/me` )
    },
    
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe} )
    },
    logOut() {
        return instance.delete(`auth/login`)
    },
}


export const ProfileApi = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status})
    }
}

export const followApi = {
    subscribe(userId) {
        return instance.post(`follow/${userId}`)
        .then (response => {
            return response.data.resultCode === 0
        })
    }
}

export const unfollowApi = {
    unsubscribe(userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data.resultCode === 0 
        })
    }
}



            
        
        

