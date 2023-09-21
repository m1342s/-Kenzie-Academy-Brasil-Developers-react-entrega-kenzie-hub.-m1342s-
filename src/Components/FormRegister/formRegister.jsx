import {  useState } from "react"
import { useForm } from "react-hook-form"
import { Navigate, useNavigate } from "react-router-dom"
import { api } from "../../Request/requestAPI"
import { InputRegister } from "../Input/inputRegister"
import { ButtonRegister } from "../../Button/ButtonRegister"
import { HeaderRegister } from "./HeaderRegister"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledFormHeaderRegister } from "./StyledFormHeaderRegister"
import { StyledFormRegister } from "./FormRegisterStyle"
import { AuthProvider } from "../../Providers/Authprovider"
import { useContext } from "react"

const schema= z.object({
  
      name: z.string().min(1, "O nome é obrigatório"),
      email: z.string()
        .min(1, "O e-mail é obrigatório")
        .email("O e-mail deve estar no formato correto"),
      password: z.string()
        .min(8, { message: "A senha é obrigatória e precisa de mínimo 8 caracteres"})
        .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
      confirm: z.string().min(1, "A confirmação de senha é obrigatória")
    }).refine(({password, confirm}) => password === confirm, {
      message: "As senhas precisam corresponderem",
      path: ["confirm"],
    })

export const FormRegister=({user,setUser})=>{
const { register,handleSubmit,formState:{errors} }=useForm({resolver:zodResolver(schema)})
console.log(errors)
const HandleRegister= async(data)=>{
    console.log(data)
    try {
        await api.post('/users',data);
        Navigate('/login')
    } catch (error) {
        console.log(error)
    }
}

return(<>
    
      <HeaderRegister/>
   
    <section>
    <StyledFormRegister>
      <form  onSubmit={handleSubmit(HandleRegister)}>
      <h2 className="createAccount">Crie sua conta</h2>
      <p className="info"> Rapido e grátis, vamos nessa</p>
       <InputRegister
      
       type="text"
       label="Nome"
       placeholder="Digite aqui seu nome"
       {...register("name")}
       />
       <p>{errors.name?.message}</p>
       
       <InputRegister
       type="text"
       label="Email"
       placeholder="Digite aqui seu e-mail"
       {...register("email")}
       />
       <p>{errors.email?.message}</p>

       <InputRegister
       type="text"
       label="Senha"
       placeholder="Digite aqui sua senha"
       {...register("password")}
       />
       <p>{errors.password?.message}</p>

        <InputRegister
       type="text"
       label="Confirmar senha"
       placeholder="Digite novamente sua senha"
       {...register("password")}
       />
       <p>{errors.password?.message}</p>

        <InputRegister
       type="text"
       label="Bio"
       placeholder="Fale sobre você"
       {...register("bio")}
       />
       <p>{errors.bio?.message}</p>

        <InputRegister
       type="text"
       label="Contato"
       placeholder="Opção de contato"
       {...register("contact")}
        />
        <p>{errors.contact?.message}</p>

      <label>Selecionar Módulo</label>
        <select{...register("course_module")}>
            <option value="Primeiro Módulo">Primeiro Módulo(Introdução ao Frontend)</option>
            <option value="Segundo Módulo">Segundo Módulo(Frontend avançado)</option>
            <option value="Terceiro Módulo">Terceiro Módulo(Introdução ao Backend)</option>
            <option value="Quarto Módulo">Quarto Módulo(Backend avançado)</option>
        </select>
        <p>{errors.course_module?.message}</p>

         <ButtonRegister/>

        </form>
        </StyledFormRegister>
        </section>
        </>
    )
    }