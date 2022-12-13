import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messageElements = props.state.messages.map((m) => {
    return <Message message={m.message} dispatch={props.dispatch} 
    newMessageText={props.state.newMessageText}/>;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogElements}
      </div>
      <div className={s.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
