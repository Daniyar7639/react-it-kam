import React from "react";
import { Navigate } from "react-router-dom";

export const WithAuthRedirect = (Component) => {
    function RedirectComponent (props)  {
        if (!props.isAuth) return <Navigate to='/login' />
            return <Component {...props} />
        }
        return RedirectComponent;
    }
    
 