import React from "react";
import { connect } from "react-redux";
import { getProfileThunk } from "../../redux/profile-reducer";
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
/*
let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);
*/
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
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

export default compose( connect (mapStateToProps, {getProfileThunk}),
   withRouter
  )(ProfileContainer)