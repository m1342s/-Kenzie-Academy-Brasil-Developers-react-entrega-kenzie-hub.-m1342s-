import { Link } from "react-router-dom"
import image from "../../assets/Logo.svg"
import { Logo } from "../Logo"
import { StyledFormHeaderRegister } from "./StyledFormHeaderRegister"


export const HeaderRegister=()=>{
    return(<>
            <StyledFormHeaderRegister>
            <Logo/>
            <Link to="/">
            <button className="returnBtn" type="submit">Voltar</button>
            </Link>
            </StyledFormHeaderRegister>
          </>)
}