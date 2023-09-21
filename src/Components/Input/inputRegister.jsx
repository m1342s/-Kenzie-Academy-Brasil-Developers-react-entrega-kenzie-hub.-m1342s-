import { forwardRef } from "react"

export const InputRegister=forwardRef(({id,type,label,name,placeholder, ...rest},ref)=>{
    return(
        <>
            <label className="label" htmlFor={id}>{label}</label>
            <input className="inputReg"  type={type} name={name} id={id} placeholder={placeholder}{...rest} ref={ref} />
        </>
    )
})