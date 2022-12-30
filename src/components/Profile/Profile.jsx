
import MypostsContainer from "./MyPosts/MypostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  
  return (
    <main className={s.main}>
      <ProfileInfo profile={props.profile} />
      <MypostsContainer />
    </main>
  );
};

export default Profile;
