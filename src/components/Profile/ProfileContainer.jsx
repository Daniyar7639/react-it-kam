import React from "react";
import { connect } from "react-redux";
import { getProfileThunk } from "../../redux/profile-reducer";
import Profile from "./Profile";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { WithAuthRedirect } from "../hoc/WithAuthRedirect";




class ProfileContainer extends React.Component {
  
  componentDidMount ()  {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getProfileThunk(userId)
    /*usersApi.getProfile(userId).then(response => {  
    this.props.setUserProfile(response.data);
  }); */
  }

    render () {
      return (
      <Profile {...this.props} profile={this.props.profile} />
  );
    }
};

const AuthRedirectComponent = WithAuthRedirect(ProfileContainer);
/*(props) => {
  if (!props.isAuth) return <Navigate to='/login' />
  return <ProfileContainer {...props} />
}*/

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

export default connect (mapStateToProps, {getProfileThunk}) (withRouter(AuthRedirectComponent));
