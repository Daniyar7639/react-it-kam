import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/Users-reduser";
import Users from "./Users";

const mapStoreToProps = (state) => {
    return {
        users:state.usersPage.users
    }
}
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
        }
    }
}


const UsersContainer = connect(mapStoreToProps, mapDispatchToProps) (Users);

export default UsersContainer;