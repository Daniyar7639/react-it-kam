import React from "react";
import s from "./ProfileInfo.module.css";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
       
    }
    activateEditMode = () => {

        this.setState( {
          editMode: true
        } )
        /*this.state.editMode=true
        this.forceUpdate()*/
    }
    deactivateEditMode = () => {
      this.setState( {
        editMode: false
      } )
      this.props.updateStatus(this.state.status)
  }
    onStatusChange = (e) => {
      this.setState( {
        status: e.currentTarget.value 
      } )
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.status !== this.props.status){
        this.setState({status:this.props.status})
      }
    }
  render() {
  return (
    <>
      
      {!this.state.editMode &&
        <div>
            <span onDoubleClick={this.activateEditMode} >{this.props.status || '----'}</span>
        </div>
      }
      {this.state.editMode &&
        <div>
            <input autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status} ></input>
        </div>
      }
    </>
  );
 }
}
export default ProfileStatus;
