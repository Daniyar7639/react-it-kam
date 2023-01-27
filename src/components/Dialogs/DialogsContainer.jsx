import { connect } from "react-redux";
import { compose } from "redux";
import {addMessageActionCreator}  from "../../redux/dialog-reducer";
import { WithAuthRedirect } from "../hoc/WithAuthRedirect";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
  return {
    dialogPage:state.dialogPage,
    newMessageText:state.dialogPage.newMessageText,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      dispatch(addMessageActionCreator(message));
    }

  }
}

/*let AuthRedirectComponent = WithAuthRedirect(Dialogs)*/
/*let mapStateToPropsForRedirect = (state) => {
    return {
      isAuth: state.auth.isAuth
    } 
  };
  AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);*/

/*(props) => {
  if (!props.isAuth) return <Navigate to='/login' />
  return <Dialogs {...props} />
};*/

/*
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)

export default DialogsContainer;
*/


export default compose (connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs)