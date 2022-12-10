import { rerenderEntireTree } from "../render";

let state = {
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
};
window.state= state
export let addPost = () => {
    let newPost = {
        id: 5, 
        message:state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export let addMessage = (dialogMessage) => {
    let newMessage = {
        id:6,
        message:dialogMessage
    };
    state.dialogPage.messages.push(newMessage);
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;
