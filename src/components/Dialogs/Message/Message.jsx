import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
  let addNewMessage = React.createRef();

  let addMessage = () => {
    let text = addNewMessage.current.value;
    props.addMessage (text);
    addNewMessage.current.value = ' ';
  }

    return <div className={s.message}>
      {props.message}
      <textarea ref={addNewMessage} ></textarea>
      <button onClick={addMessage}>Add message</button>
      </div>;
  };

  export default Message;