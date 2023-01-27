import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";


const DialogsForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
    <div><Field placeholder={'Add your message'} name={'message'} component={'textarea'} /></div>
    <div><button>Add message</button></div>
    </form>
  )
}

const DialogsReduxForm = reduxForm({form: 'message'})(DialogsForm)

const Dialogs = (props) => {

  let state = props.dialogPage;

  let dialogElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} key={d.id} />);
  let messageElements = state.messages.map((m) => {
    return <Message message={m.message} key={m.id} />;});
  


 /* let addMessage = () => {
    props.addMessage();
  };
  let onPostChange = (event) => {
    let text = event.target.value;
    props.updateNewMessageText(text);
  };*/
  
  let addMessageForm = (value) => {
    props.addMessage(value.message);
  }
    return (
      <div className={s.dialogs}>
        <div className={s.dialogsItem}>{dialogElements}</div>
        <div className={s.messages}>
          <div>{messageElements}</div>
        </div>
        <DialogsReduxForm onSubmit={addMessageForm} />
      </div>
    )
 /* return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogElements}</div>
      <div className={s.messages}>
         <div>{messageElements}</div>
         <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={props.newMessageText}
            placeholder="enter your message"
          ></textarea>
        </div>
        <div>
          <button onClick={addMessage }>Add Message</button>
        </div>
      </div>
        </div>
      
    </div>
  );*/
};



export default Dialogs;
