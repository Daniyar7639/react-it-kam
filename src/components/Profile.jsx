import s from "./Profile.module.css";

const Profile = () => {
    return <main className={s.main}>
    <div className={s.img1}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU"></img>
    </div>
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjF4BI5W-dkxj-FxchHNeTvObAykcJsWofWk4KTL4z5nnFNKf0By0lW1GpvbckD2iUYmE&usqp=CAU"></img>
    </div>
    <div>
      My post
      <div>New post</div>
      <div>
        <div className={s.item}>Post1</div>
        <div className={s.item}>Post2</div>
      </div>
    </div>
  </main>
}

export default Profile;