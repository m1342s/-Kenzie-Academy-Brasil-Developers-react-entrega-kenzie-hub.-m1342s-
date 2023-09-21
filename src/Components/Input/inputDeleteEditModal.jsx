import { forwardRef } from "react"

export const InputModalDeleteEdit=forwardRef(({id,type,label,name,placeholder, ...rest},ref)=>{
    return(
         <>
        <label className="labelLogin" htmlFor={id}>{label}</label>
        <input type={type} name={name} id={id} placeholder={placeholder}{...rest} ref={ref} />
        </>
    )
})