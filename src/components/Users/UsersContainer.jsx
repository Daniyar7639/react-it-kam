import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setisFetching, setTotalUsersCount, setUsers, unfollow } from "../../redux/Users-reduser";
import Users from "./Users";
import axios from "axios";
import Preloader from "../../common/preloader/preloader";

class UsersContainer extends React.Component {

    /*constructor(props) {
        super(props);  
 };                              konstruktor vizivaetsya po umolchaniyu*/
    componentDidMount () {
        this.props.setisFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize} `).then(response => { 
            this.props.setisFetching(false)  
    this.props.setUsers(response.data.items);
    this.props.setTotalUsersCount(response.data.totalCount)
  }); 
    }

    onPageChanged = (pageNumber) => {
        this.props.setisFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize} `).then(response => {
            this.props.setisFetching(false)     
            this.props.setUsers(response.data.items);
          });
    };

 
  render () {
    return  <>
        {this.props.isFetching ? 
        <Preloader /> : null}
        <Users currentPage={this.props.currentPage}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged} 
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        users={this.props.users} />
        
        
    </>
  }
}

const mapStoreToProps = (state) => {
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching
    }
}
/* 58 lesson, mapDispatchToProps ubrali vo vnutr vizova connect
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC (userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        setisFetching: (isFetching) => {
            dispatch(setisFetchingAC(isFetching));
        }
    }
}
*/

const UsersC = connect(mapStoreToProps, 
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setisFetching,}) (UsersContainer);

export default UsersC;