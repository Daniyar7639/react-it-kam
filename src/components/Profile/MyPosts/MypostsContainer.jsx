
import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import Myposts from "./Myposts";


let mapStateToProps = (state) => {
  return {
    posts:state.profilePage.posts,
    newPostText:state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch(addPostActionCreator(post));
    },
  }
}

const MypostsContainer = connect (mapStateToProps, mapDispatchToProps)(Myposts);

export default MypostsContainer;
