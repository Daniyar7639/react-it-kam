import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {

    let dialog = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Valera'},
    ];

    let message = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi how are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'Hi'},
    ];

    let dialogElements = dialog.map(d => <DialogItem name={d.name} id={d.id} />);

    let messageElements = message.map((m) => {
        return <Message message={m.message} />
    });



  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messageElements}
      </div>
    </div>
  );
};

export default Dialogs;
