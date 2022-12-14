
import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";




const Myposts = (props) => {

  let postElements = props.posts.map ((p) => {
    return <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  });

  let newPostElement = React.createRef();
 
  let addPost = () => {
    props.addPost();
  }
 
  let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.mypostBlok}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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
