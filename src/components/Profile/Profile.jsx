import Myposts from "./MyPosts/Myposts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  
  return (
    <main className={s.main}>
      <ProfileInfo />
      <Myposts posts={props.profilePage.posts} 
      newPostText={props.profilePage.newPostText}
      dispatch={props.dispatch} />
    </main>
  );
};

export default Profile;
