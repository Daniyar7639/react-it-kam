import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/state';
import s from './../Dialogs.module.css';


const Message = (props) => {
  let addNewMessage = React.createRef();

  let addMessage = () => {
    props.dispatch (addMessageActionCreator());
  };

  let onPostChange = () => {
    let text = addNewMessage.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text))
  };
    
    return <div className={s.message}>
      {props.message}
      <textarea onChange={onPostChange} ref={addNewMessage} value={props.newMessageText}></textarea>
      <button onClick={addMessage}>Add message</button>
      </div>;
  };

  export default Message;