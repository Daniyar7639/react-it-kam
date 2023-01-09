import { usersApi } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE' 
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_FOLLOWING_PROGRES = 'SET_FOLLOWING_PROGRES'

const initialState = {
    users : [],
    pageSize: 5,
    totalUsersCount:0,
    currentPage: 1,
    isFetching: false,
    followingInProgres: []
}

const usersReducer = (state=initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            } 

        case UNFOLLOW: 
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u;
            })
        } 
        case SET_USERS: {
            return {...state, users:action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage:action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount:action.count}
        }
        case SET_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_FOLLOWING_PROGRES: {
            return {
                ...state, 
                followingInProgres: action.isFetching
                ? [...state.followingInProgres, action.userId]
                : state.followingInProgres.filter(id=>id!=action.userId)
            }
        }
    
    default:
        return state    
    }
    
}

export const followSucces = (userId) => ({type: FOLLOW, userId});
export const unfollowSucces = (userId) =>( {type:UNFOLLOW, userId})
export const setUsers = (users) =>( {type:SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export const setisFetching = (isFetching) => ({type:SET_IS_FETCHING, isFetching})
export const setfollowingProgres = (isFetching, userId) => ({type:SET_FOLLOWING_PROGRES, isFetching, userId})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setisFetching(true));
        usersApi.getUsers(currentPage, pageSize)
        .then(data => { 
            dispatch(setisFetching(false));  
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount))
   }); 
 }
};

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(setfollowingProgres(true, userId));
        usersApi.unfollow(userId)
        
          .then((data) => {
            if (data.resultCode === 0) {
              dispatch(unfollowSucces(userId));
            }
            dispatch(setfollowingProgres(false, userId));
          });
 }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setfollowingProgres(true, userId));
        usersApi.follow(userId)
        
          .then((data) => {
            if (data.resultCode === 0) {
              dispatch(followSucces(userId));
            }
            dispatch(setfollowingProgres(false, userId));
          });
 }
}


export default usersReducer;