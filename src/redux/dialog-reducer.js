const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
let initialState = {
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
      newMessageText: 'aaaa',
    };

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id:6,
                message:state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state; 
    }

};


export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
  
export const updateNewMessageTextActionCreator = (text) => {
    return {
      type:UPDATE_NEW_MESSAGE_TEXT, newMessage: text
    }
  }

export default dialogReducer;