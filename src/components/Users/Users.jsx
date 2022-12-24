import axios from "axios";
import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png'





class Users extends React.Component {

    /*constructor(props) {
        super(props);  
 };                              konstruktor vizivaetsya po umolchaniyu*/
    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize} `).then(response => {   
    this.props.setUsers(response.data.items);
    this.props.setTotalUsersCount(response.data.totalCount)
  }); 
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize} `).then(response => {   
            this.props.setUsers(response.data.items);
          });
    }

 
  render = () => {

    let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }
    //Карусель массива номеров страниц, можно сделать через Array.slice():
    let curP = this.props.currentPage;
    let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
    let curPL = curP + 5;
    let slicedPages = pages.slice( curPF, curPL); 
    /* И в jsx меняем:
    pages.map(*****) 
     на 
    slicedPages.map(*****)*/

    return <div>
        <div>
            {slicedPages.map(p =>  {
                return <spam className={this.props.currentPage === p && styles.selectedPage} 
                onClick={(e) => {this.onPageChanged(p)}} >{p}</spam>

            })}
            

        </div>
        {
            this.props.users.map (u => <div key={u.id}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='Lion' className={styles.userPhoto} />
                </div>
                <div>
                    {u.followed 
                     ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button> 
                     : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
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
  }
}



export default Users;