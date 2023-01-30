import React from "react"
import style from "./formControls.module.css"

export const Textarea = ({input, meta, ...props}) => {
    
    let hasError = meta.touched && meta.error
    return(
        <div className={ hasError ? style.error : ""}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    
    let hasError = meta.touched && meta.error
    return(
        <div className={ hasError ? style.error : ""}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}