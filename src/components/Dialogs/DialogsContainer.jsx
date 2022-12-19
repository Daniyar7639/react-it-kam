import { connect } from "react-redux";
import {addMessageActionCreator,updateNewMessageTextActionCreator,}  from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
  return {
    dialogPage:state.dialogPage,
    newMessageText:state.dialogPage.newMessageText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    }

  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;
