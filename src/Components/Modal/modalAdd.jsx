import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../Request/requestAPI"
import { useForm } from "react-hook-form";
import {InputModalAdd} from "../Input/inputModalAdd"
import { StyledModalAdd } from "./StyledModalAdd";
import { useContext } from "react"
import  {TechContext, TechProvider} from "../../Providers/TechContext"



const schema= z.object({
    title: z.string().min(1, "O titulo é obrigatório"),
    status:z.string().min(1, "O status é obrigatória"),
})


export const ModalAdd=({})=>{
    const {techAdd,setTechAdd,registerTech,openModal,setOpenModal}=useContext(TechContext)
    const{register,handleSubmit,formState:{errors}}=useForm({resolver:zodResolver(schema)})
    
    const submit = (formData) =>{
      
      registerTech(formData)
      setOpenModal(false)
    }
    return(
        <StyledModalAdd>
        <dialog>
        <form  onSubmit={handleSubmit(submit)}>
            <div className="nameClose">
            <h3 className="addTechTitle">Cadastrar tecnologia</h3>
            <span onClick={()=>setOpenModal(false)}>X</span>
            </div>

            <InputModalAdd 
            label="Nome"
            {...register("title")}
            />
           <p>{errors.title?.message}</p>
        <div className="labelAndSelect">
         <label>Selecionar Status</label>
        <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
        </select>
        <p>{errors.status?.message}</p>
        </div>
        
        <button type="submit">Cadastrar tecnologia</button>
        
        </form>
        </dialog>
        </StyledModalAdd>
        )
    
}
