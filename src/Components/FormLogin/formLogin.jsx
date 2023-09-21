import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { InputLogin } from "../Input/inputLogin";
import { HeaderFormLogin } from "./HeaderFormLogin";
import * as z from "zod"
import { useContext} from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {StyledFormLogin} from "./styled"
import { UserContext } from "../../Providers/Authprovider";


const schema= z.object({
    email: z.string().min(1, "O email é obrigatório"),
    password:z.string().min(1, "A senha é obrigatória"),
})

export const FormLogin=()=>{
const {handleLogin,logout}= useContext(UserContext)

const { register,handleSubmit,formState:{ errors } }=useForm({resolver:zodResolver(schema)})

return(
     <>
     <StyledFormLogin>
     <HeaderFormLogin logout={logout}/>
    <main>
    <form onSubmit={handleSubmit(handleLogin)}>
        <h3>Login</h3>
         <InputLogin 
          label="Email"
          {...register("email")}
          />
          <p>{errors.email?.message}</p>

         <InputLogin
          label="Senha"
          {...register("password")}
          />
          <p>{errors.password?.message}</p>

        <button className="buttonEnter" type="submit">Entrar</button>
        <p className="messageToCreateAccount">Anda não possui uma conta?</p>
        <Link to="/register">
        <button className="buttonRegisterLogin">Cadastre-se</button>
        </Link>
    </form>
    
    </main>
    </StyledFormLogin>
    </>
)
}