import React from "react";
import { connect } from "react-redux";
import { getProfileThunk, getStatus, updateStatus } from "../../redux/profile-reducer";
import Profile from "./Profile";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { compose } from "redux";




class ProfileContainer extends React.Component {
  
  componentDidMount ()  {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 27321;
    }
    this.props.getProfileThunk(userId);
    this.props.getStatus(userId)
    /*usersApi.getProfile(userId).then(response => {  
    this.props.setUserProfile(response.data);
  }); */
  }

    render () {
      return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
  );
    }
};
/*
let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);
*/
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
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
/*
export default connect (mapStateToProps, {getProfileThunk}) (withRouter(AuthRedirectComponent));*/

export default compose( connect (mapStateToProps, {getProfileThunk, getStatus, updateStatus}),
   withRouter
  )(ProfileContainer)