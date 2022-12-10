import Myposts from "./MyPosts/Myposts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  
  return (
    <main>
      <ProfileInfo />
      <Myposts state={props.state.posts} addPost={props.addPost}/>
    </main>
  );
};

export default Profile;
