import { profileApi, usersApi } from "../api/api";




const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';



let initialState = {
    posts: [
      { id: 1, message: "Hi, How are you Mr Poster?", likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 1 },
      { id: 3, message: "It's my second post", likesCount: 5 },
      { id: 4, message: "It's my 3rd post", likesCount: 9 },
    ],
    //newPostText: 'it-kamas',
    profile: null,
    status: ''
  };


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5, 
                message: action.post,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost]};
            /*stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = ''*/
        

        case SET_USER_PROFILE: 
            return {...state, profile:action.profile};
        case SET_STATUS: 
            return {...state, status:action.status};
        default:
            return state;
    }
};

export const addPostActionCreator = (post) => ({type: ADD_POST, post});
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type:SET_STATUS, status});


export const getProfileThunk = (userId) => {
    return (dispatch) => {
        usersApi.getProfile(userId).then(response => {  
            dispatch(setUserProfile(response.data));
          }); 
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
        .then(response => { 
            dispatch(setStatus(response.data));
          }); 
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) { 
            dispatch(setStatus(status));
            }
          }); 
    }
}



export default profileReducer;