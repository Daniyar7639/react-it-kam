import Preloader from "../../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      {/*<div className={s.img1}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU"
          alt="ProfileKartinka"
        />
      </div>
      <div className={s.descriptionBlok}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjF4BI5W-dkxj-FxchHNeTvObAykcJsWofWk4KTL4z5nnFNKf0By0lW1GpvbckD2iUYmE&usqp=CAU"
          alt="ProfileKartinka"
        />
        
  </div>*/}
      <img src={props.profile.photos.large} alt = 'ava'/>
      <ProfileStatus status='Hello my friend' />
      <div>{props.profile.aboutMe}</div>
      <div>{props.profile.fullName}</div>
      <div>{props.profile.contacts.facebook}</div>
      <div>{props.profile.userId}</div>

    </div>
  );
};

export default ProfileInfo;
