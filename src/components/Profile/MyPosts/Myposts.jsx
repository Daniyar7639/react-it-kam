import s from './Myposts.module.css';
import Post from './Post/Post';

const Myposts = () => {
  return (
    <div>
      My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, How are you?'/>
        <Post message="It's my first" post/>
        <Post />
      </div>
    </div>
  );
};

export default Myposts;
