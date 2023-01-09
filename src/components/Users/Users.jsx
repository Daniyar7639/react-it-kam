import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import styles from "./Users.module.css";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  //Карусель массива номеров страниц, можно сделать через Array.slice():
  let curP = props.currentPage;
  let curPF = curP - 5 < 0 ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);
  /* И в jsx меняем:
    pages.map(*****) 
     на 
    slicedPages.map(*****)*/
  return (
    <div>
      <div>
        {slicedPages.map((p) => {
          return (
            <spam key={p.toString()} className={props.currentPage === p && styles.selectedPage}
              onClick={(e) => props.onPageChanged(p)}> {" "}
              {p} {" "}
            </spam>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <NavLink to={"/profile/" + u.id}>
              <img src={u.photos.small != null 
              ? u.photos.small 
              : userPhoto} alt="avaphoto" className={styles.userPhoto} />
            </NavLink>
          </div>
          <div>
            {u.followed 
            ? <button disabled={props.followingInProgres.includes(u.id)}
                onClick={() => {props.unfollow(u.id);}}>
                Unfollow
              </button>
            : <button disabled={props.followingInProgres.includes(u.id)}
                onClick={() => {props.follow(u.id);}} >
                Follow
              </button>
            }
          </div>
          <div>{u.name}</div>
          <div>{u.status}</div>
          <div>{"u.location.country"}</div>
          <div>{"u.location.city"}</div>
        </div>
      ))}
    </div>
  );
};

export default Users;

/*axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
    withCredentials:true,
    headers: {
        "API-KEY":"a5b03892-6bd5-4426-958d-569ae2dbd812"
    } 
})*/
