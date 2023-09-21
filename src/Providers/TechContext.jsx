import { createContext, useState } from "react"
import { UserContext } from "./Authprovider"
import { useContext } from "react"
import { api } from "../Request/requestAPI"

export const TechContext=createContext({})


export const TechProvider=({children})=>{
    const [techAdd,setTechAdd]=useState([])
    const [openModal, setOpenModal]=useState()
    const {user}= useContext(UserContext)
    const [openModalEditDelete, setOpenModalEditDelete] = useState(false);
    
    const registerTech=async(data)=>{
        const token= JSON.parse(localStorage.getItem("@TOKEN"))
        console.log(token)  
        try{
        const response=await api.post("/users/techs",data,{headers:{
        Authorization:`Bearer ${token}`}})
        console.log(response)
        setTechAdd(...techAdd,data)
        }
        catch(error){
            console.error(error);
           }
    }
    const editTech= async (data) => {
        const token = JSON.parse(localStorage.getItem("@TOKEN"));
        const userId=JSON.parse(localStorage.getItem("USERID"));
    
        try {
          const responseEdit = await api.put(`/users/techs/${userId}`, data, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
        } catch (error) {
          console.error(error);
        }
      };

      const deleteModal = async (data) => {
        const userId=JSON.parse(localStorage.getItem("USERID"));
        const token = JSON.parse(localStorage.getItem("@TOKEN"));
        console.log(token,userId)
        try{
        const responseDelete = await api.delete(
          `/users/techs/${response.data.tech.id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
      }catch(error){
           console.error(error)
        };
      };
    return(
        <TechContext.Provider value={{techAdd,setTechAdd,registerTech,editTech,openModal,setOpenModal,openModalEditDelete, setOpenModalEditDelete,deleteModal}}>
        {children}
        </TechContext.Provider>
        )
    }
