import { forwardRef } from "react"

export const InputModalAdd=forwardRef(({id,type,label,name,placeholder, ...rest},ref)=>{
    return(<div className="InputandLabel">
        <label className="labelModalAdd" htmlFor={id}>{label}</label>
        <input type={type} name={name} id={id} placeholder={placeholder}{...rest} ref={ref} />
        </div>
    )
})