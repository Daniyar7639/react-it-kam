import Myposts from "./MyPosts/Myposts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <main>
      <ProfileInfo />
      <Myposts />
    </main>
  );
};

export default Profile;
