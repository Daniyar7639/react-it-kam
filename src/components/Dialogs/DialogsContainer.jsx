import {addMessageActionCreator,updateNewMessageTextActionCreator,}  from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {

  let state = props.store.getState().dialogPage;

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return <Dialogs updateNewMessageText={onPostChange} addMessage={addMessage} 
  dialogPage={state} newMessageText={state.newMessageText} />
};

export default DialogsContainer;
