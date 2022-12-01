import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbcIOSoA7j84hDBfkn4oiV1RCLtf_fEkJbvQ&usqp=CAU"
        alt=""/>
      Post1
      <div>
        <button>
          <span>Like</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
