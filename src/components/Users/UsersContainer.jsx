import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, unfollow, setfollowingProgres, getUsers } from "../../redux/Users-reduser";
import Users from "./Users";
import Preloader from "../../common/preloader/preloader";



class UsersContainer extends React.Component {

    /*constructor(props) {
        super(props);  
 };                              konstruktor vizivaetsya po umolchaniyu*/
    componentDidMount () {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        /*this.props.setisFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => { 
            this.props.setisFetching(false)  
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
  }); */
    }

    onPageChanged = (pageNumber) => {
       /* this.props.setisFetching(true)*/
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
       /* .then(data => {
            this.props.setisFetching(false)     
            this.props.setUsers(data.items);
          });*/
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
        users={this.props.users}
        followingInProgres={this.props.followingInProgres} />
          
    </>
  }
}

const mapStoreToProps = (state) => {
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching:state.usersPage.isFetching,
        followingInProgres: state.usersPage.followingInProgres
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
    {follow, unfollow, setCurrentPage, setfollowingProgres, getUsers }) (UsersContainer);

export default UsersC;