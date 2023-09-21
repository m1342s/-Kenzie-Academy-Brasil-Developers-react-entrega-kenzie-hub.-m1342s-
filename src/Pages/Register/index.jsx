import { FormRegister } from "../../Components/FormRegister/formRegister";
import { AuthProvider } from "../../Providers/Authprovider";

export const Register=({user,setUser})=>{
    return(
        <AuthProvider>
        <FormRegister user={user} setUser={setUser}/>
        </AuthProvider>

    )
}