import s from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = () => {

  let post = [
    {id: 1, message: "Hi, How are you Mr Poster?", likesCount: 12},
    {id: 2, message: "It's my first post", likesCount: 1},
    {id: 3, message: "It's my second post", likesCount: 5},
    {id: 4, message: "It's my 3rd post", likesCount: 9},
  ];

  let postElements = post.map ((p) => {
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
