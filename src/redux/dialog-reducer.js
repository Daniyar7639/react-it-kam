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
      newMessageText: 'write'
    };

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id:6,
                message:state.newMessageText
            };
            return {...state, messages: [...state.messages, newMessage ], newMessageText: ''};
            /*stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';*/
            
        };
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {...state, newMessageText:action.newMessage};
        };
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