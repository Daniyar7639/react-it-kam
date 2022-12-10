import Myposts from "./MyPosts/Myposts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  
  return (
    <main>
      <ProfileInfo />
      <Myposts posts={props.profilePage.posts} 
      newPostText={props.profilePage.newPostText}
      addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </main>
  );
};

export default Profile;
