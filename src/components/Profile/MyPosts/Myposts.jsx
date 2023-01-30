
import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../common/formControls/formControls";
import { maxLengthCreator, required } from "../../../utilities/validator/validator";
import s from "./Myposts.module.css";
import Post from "./Post/Post";

const maxLength5 = maxLengthCreator(5)
const MypostsForm = (props) => {

  

  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field placeholder={'Add your post'} name={'post'} component={Textarea} validate={[required, maxLength5]} type="text" /></div>
      <div><button>Add post</button></div>
    </form>
  )
}

const MypostReduxForm = reduxForm({
  // a unique name for the form
  form: 'post'
})(MypostsForm)

const Myposts = (props) => {
  
  let postElements = props.posts.map ((p, i) => {
    return <Post message={p.message} likesCount={p.likesCount} key={i} />
  });
/*
  let newPostElement = React.createRef();
 
  let addPost = () => {
    props.addPost();
  }
 
  let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }*/
 
  const onSubmit = (values) => {
    props.addPost(values.post)
}
 
  return (
    <div className={s.mypostBlok}>
      <h3>My post</h3>
        <MypostReduxForm onSubmit={onSubmit} />
      <div className={s.posts}>
      {postElements}
      </div>
    </div>
  );

};

export default Myposts;
