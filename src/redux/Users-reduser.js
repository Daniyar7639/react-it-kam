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

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) =>( {type:UNFOLLOW, userId})
export const setUsers = (users) =>( {type:SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export const setisFetching = (isFetching) => ({type:SET_IS_FETCHING, isFetching})
export const setfollowingProgres = (isFetching, userId) => ({type:SET_FOLLOWING_PROGRES, isFetching, userId})


export default usersReducer;