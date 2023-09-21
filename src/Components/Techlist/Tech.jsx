export const Tech=({tech,DeleteEditModal,setOpenModal,setOpenModalEditDelete,openModalEditDelete})=>{
   const edit=()=>{console.log('clicou')
   console.log(openModalEditDelete)
    setOpenModalEditDelete(true)
    console.log(openModalEditDelete)} 
    return(
     <li onClick={edit}>
        <h4>{tech.title}</h4>
        <p>{tech.status}</p>
     </li>
     )
 }