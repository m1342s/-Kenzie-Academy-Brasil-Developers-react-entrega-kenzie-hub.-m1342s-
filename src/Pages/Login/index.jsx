import { Form, Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { FormLogin } from "../../Components/FormLogin/formLogin";
import { AuthProvider, UserContext } from "../../Providers/Authprovider";
export const Login=({user,setUser,logout})=>{
    return(
        <AuthProvider>
        <FormLogin  logout={logout} />
        </AuthProvider>
    )
}