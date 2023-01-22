
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY":"a5b03892-6bd5-4426-958d-569ae2dbd812"
    } ,
    baseURL:'https://social-network.samuraijs.com/api/1.0/'
});

export const usersApi = {
    getUsers(currentPage=1, pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize} `, {
       }).then(response => {
           return response.data});
       },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`,)
        .then(response => {
            return response.data
        })
       },
    follow(userId) {
        return instance.post(`follow/${userId}`, {}  )
        .then(response => {
            return response.data
        })
    },
    getProfile(userId) {
        console.warn('use profileAPI')
        return profileApi.getProfile(userId)
    }

};

export const profileApi = {
    getProfile(userId) {
        return instance.get(`profile/ ${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/ ${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status} );
    }

};

export const authsApi = {
    authMe () {
        return instance.get(`auth/me/ `, )
    
  }
}

/*export const followUnfollowApi = {
    unfollow(userId) {
        return instance.delete(`follow/${userId}`,)
        .then(response => {
            return response.data
        })
    },
    follow(userId) {
        instance.post(`follow/${userId}`, {}  )
        .then(response => {
            return response.data
        })
    }
};
*/


