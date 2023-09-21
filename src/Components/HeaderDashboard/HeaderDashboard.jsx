import { Link } from "react-router-dom"
import { Logo } from "../Logo"
import { StyledDashboardHeader } from "./styled"
import { UserContext } from "../../Providers/Authprovider"
import { useContext } from "react"


export const HeaderDashboard=()=>{
  const {logout}= useContext(UserContext)
    return(<StyledDashboardHeader>
            <Logo/>
            <Link to="/">
            <button type="submit" onClick={logout}>Sair</button>
            </Link>
          </StyledDashboardHeader>
        )
}