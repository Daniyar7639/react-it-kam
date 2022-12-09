
import s from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = (props) => {
  debugger;

  let postElements = props.state.map ((p) => {
    return <Post message={p.message} likesCount={p.likesCount} />
  });

  return (
    <div className={s.mypostBlok}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
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
