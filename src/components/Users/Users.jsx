import axios from "axios";
import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'




const Users = (props) => {
   
   let getUsers = () => 
   { if (props.users.length===0) {
    /*props.setUsers([
      {
        id: 1,
        followed: false,
        photoUrl:
          "https://cdn1.vectorstock.com/i/1000x1000/01/65/lion-color-realistic-portrait-a-lions-head-vector-31940165.jpg",
        fullName: "Dmitriy",
        status: "I am programmer",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        followed: true,
        photoUrl:
          "https://cdn1.vectorstock.com/i/1000x1000/01/65/lion-color-realistic-portrait-a-lions-head-vector-31940165.jpg",
        fullName: "Daniyar",
        status: "I am programmer too",
        location: { city: "Tashkent", country: "Uzbekistan" },
      },
      {
        id: 3,
        followed: false,
        photoUrl:
          "https://cdn1.vectorstock.com/i/1000x1000/01/65/lion-color-realistic-portrait-a-lions-head-vector-31940165.jpg",
        fullName: "Deniel",
        status: "I am also programmer",
        location: { city: "Nyu-york", country: "USA" },
      },
    ]);*/
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        
        props.setUsers(response.data.items);
   }) 

 }};
    

       

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map (u => <div key={u.id}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='Lion' className={styles.userPhoto} />
                </div>
                <div>
                    {u.followed 
                     ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                     : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                </div>
                <div>
                    {u.name}
                </div>
                <div>
                    {u.status}
                </div>
                <div>
                    {"u.location.country"}
                </div>
                <div>
                    {"u.location.city"}
                </div>
            </div>)
        }
    </div>
};



export default Users;