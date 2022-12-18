import {addMessageActionCreator,updateNewMessageTextActionCreator,}  from "../../redux/dialog-reducer";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {

  

  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState().dialogPage;

        let addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };
      
        let onPostChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };
        return <Dialogs updateNewMessageText={onPostChange} addMessage={addMessage} 
        dialogPage={state} newMessageText={state.newMessageText} />
      }}
      
    </StoreContext.Consumer>
  )
};

export default DialogsContainer;
