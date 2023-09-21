import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../Request/requestAPI";
import { useForm } from "react-hook-form";
import { InputModalDeleteEdit } from "../Input/inputDeleteEditModal";
import { useContext } from "react";
import { TechContext } from "../../Providers/TechContext";
import { StyledModalEditDelete } from "./StyledModalEditDelete";


const schema = z.object({
  title: z.string().min(1, "O titulo é obrigatório"),
  status: z.string().min(1, "O status é obrigatória"),
});

export const EditDeleteTechModal = () => {
  const {editTech,openModal,setOpenModal,openModalEditDelete, setOpenModalEditDelete,deleteModal } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <StyledModalEditDelete>
    <div role="dialog">
    <form onSubmit={handleSubmit(editTech)}>
      <div className="closeAndName">
      <h3 className="closeNameEditDelete">Tecnologia Detalhes</h3>
      <span onClick={()=>setOpenModalEditDelete(false)}>X</span>
      </div>
      <InputModalDeleteEdit
      label="Nome do projeto"
      />

      <label>Status</label>
      <select {...register("status")}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      <p>{errors.status?.message}</p>
      <div className="buttons">
      <button className="saveAlt" type="submit" onClick={()=>editTech}>
        Salvar alterações
      </button>
      <button className="deleteButton" type="button" onClick={() => deleteModal()}>
        Excluir
      </button>
      </div>
    </form>
    </div>
    </StyledModalEditDelete>
  );
};
