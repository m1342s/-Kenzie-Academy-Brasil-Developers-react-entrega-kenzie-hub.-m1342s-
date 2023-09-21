import { AllRoutes } from "./Routes"
import { GlobalReset } from "./GlobalStyles"
import { useState } from "react"
import { AuthProvider } from "./Providers/Authprovider"


function App() {
  return (
    <>
    <GlobalReset/> 
    
    <AllRoutes />
    </>
  )
}
export default App
