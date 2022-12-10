import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = (props) => {

  let postElements = props.state.map ((p) => {
    return <Post message={p.message} likesCount={p.likesCount} />
  });

  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost (text);
    newPostElement.current.value = ' ';
  }

  return (
    <div className={s.mypostBlok}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
        <div>
          <button>Remove post</button>
        </div>
      </div>
      <div className={s.posts}>
      {postElements}
      </div>
    </div>
  );
};

export default Myposts;
