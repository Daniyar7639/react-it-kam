const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT ='UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        dialogPage: {
          dialogs: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Andrey" },
            { id: 3, name: "Sveta" },
            { id: 4, name: "Sasha" },
            { id: 5, name: "Valera" },
          ],
          messages: [
            { id: 1, message: "Hello" },
            { id: 2, message: "Hi how are you?" },
            { id: 3, message: "Yo" },
            { id: 4, message: "yo" },
            { id: 5, message: "Hi" },
          ],
          newMessageText: ''
        },
      
        profilePage: {
          posts: [
            { id: 1, message: "Hi, How are you Mr Poster?", likesCount: 12 },
            { id: 2, message: "It's my first post", likesCount: 1 },
            { id: 3, message: "It's my second post", likesCount: 5 },
            { id: 4, message: "It's my 3rd post", likesCount: 9 },
          ],
          newPostText: 'it-kamas'
        },
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState () {
        return this._state
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },

    /*addPost() {
        let newPost = {
            id: 5, 
            message:this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },
    addMessage(dialogMessage) {
        let newMessage = {
            id:6,
            message:dialogMessage
        };
        this._state.dialogPage.messages.push(newMessage);
        this._state.dialogPage.newMessageText = ''
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    updateNewMessageText (newMessage){
        this._state.dialogPage.newMessageText = newMessage;
        this._callSubscriber(this._state);*/

    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5, 
                message:this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id:6,
                message:this._state.dialogPage.newMessageText
            };
            this._state.dialogPage.messages.push(newMessage);
            this._state.dialogPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state)
        }
    }
    

};

export const addPostActionCreator = () => ({type: ADD_POST});
  
 export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});


export const addMessageActionCreator = () => {
    return {
      type: ADD_MESSAGE
    }
  };
  
export const updateNewMessageTextActionCreator = (text) => {
    return {
      type:UPDATE_NEW_MESSAGE_TEXT, newMessage: text
    }
  }


export default store;
//window.store = store;

