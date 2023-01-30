import React from "react";
import { Field, reduxForm } from 'redux-form'
import { Input } from "../../common/formControls/formControls";
import { required } from "../../utilities/validator/validator";

const LoginForm = (props) => {
 return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'login'} name={'login'} component={Input} validate={[required]} /></div>
            <div><Field placeholder={'password'} name={'password'} component={Input} validate={[required]} /></div>
            <div><Field type={'checkbox'} name={'checkBox'} component={Input}  />Remember me</div>
            <div><button>Log in</button></div>
        </form>
 )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
       <div>
           <h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit} />  
       </div>
    )
   }

export default Login;