import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import {addMessageActionCreator,updateNewMessageTextActionCreator,}  from "../../redux/dialog-reducer";
import { WithAuthRedirect } from "../hoc/WithAuthRedirect";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
  return {
    dialogPage:state.dialogPage,
    newMessageText:state.dialogPage.newMessageText,
    isAuth: state.auth.isAuth
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

const AuthRedirectComponent = WithAuthRedirect(Dialogs)
/*(props) => {
  if (!props.isAuth) return <Navigate to='/login' />
  return <Dialogs {...props} />
};*/

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)

export default DialogsContainer;
