import React from "react";
import s from "./ProfileInfo.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode() {
        this.setState( {
          editMode: true
        } )
        /*this.state.editMode=true
        this.forceUpdate()*/
    }
    deactivateEditMode() {
      this.setState( {
        editMode: false
      } )
  }
  render() {
  return (
    <>
      {!this.state.editMode &&
        <div>
            <span onDoubleClick={this.activateEditMode.bind(this)} >{this.props.status}</span>
        </div>
      }
      {this.state.editMode &&
        <div>
            <input autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} ></input>
        </div>
      }
    </>
  );
 }
}
export default ProfileStatus;
