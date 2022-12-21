const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT ='UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
      { id: 1, message: "Hi, How are you Mr Poster?", likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 1 },
      { id: 3, message: "It's my second post", likesCount: 5 },
      { id: 4, message: "It's my 3rd post", likesCount: 9 },
    ],
    newPostText: 'it-kamas'
  };


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5, 
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost], newPostText: '' };
            /*stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = ''*/
        
        case UPDATE_NEW_POST_TEXT: 
            return {...state, newPostText:action.newText};
            /*stateCopy.newPostText = action.newText;*/
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;