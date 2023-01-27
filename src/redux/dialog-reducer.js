const ADD_MESSAGE = 'ADD_MESSAGE';

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
      
    };

const dialogReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id:6,
                message:action.message
            };
            return {...state, messages: [...state.messages, newMessage ] };
            /*stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';*/
            
        };
        default:
            return state; 
    }

};


export const addMessageActionCreator = (message) => ({type: ADD_MESSAGE, message});
  

export default dialogReducer;