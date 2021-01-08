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
       return instance.get(`profile/` + userId)
    },

    authorization() {
        return instance.get(`auth/me` )
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



            
        
        

