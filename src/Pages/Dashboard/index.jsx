import { useContext, useEffect, useState } from "react";
import { HeaderDashboard } from "../../Components/HeaderDashboard/HeaderDashboard";
import { api } from "../../Request/requestAPI";
import { useNavigate, useParams } from "react-router-dom";
import { StyledDashboard } from "./style";
import { UserContext } from "../../Providers/Authprovider";
import { TechContext } from "../../Providers/TechContext";
import { ModalAdd } from "../../Components/Modal/modalAdd";
import { Tech } from "../../Components/Techlist/Tech";
import { EditDeleteTechModal } from "../../Components/Modal/DeleteEditModal";

export const Dashboard = () => {
  const { techList, setTechList,techAdd,setTechAdd,registerTech,editTech,openModal, setOpenModal, openModalEditDelete,setOpenModalEditDelete,deleteModal } = useContext(TechContext);
  const { user, setUser, getUser } = useContext(UserContext);
  const { id } = useParams();
  
  const navigate = useNavigate();
  
  useEffect(() => {
    const user = localStorage.getItem("@TOKEN");
    if (!user) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    getUser();
  }, []);
  const edit = () => {
    setOpenModalEditDelete(true);
  };
  return (
    <>
      {openModal && <ModalAdd />}
      {openModalEditDelete && <EditDeleteTechModal />}
      <StyledDashboard>
        <main>
          <HeaderDashboard />
          <hr />
          {user ? (
            <div className="userInfo">
              <h1 className="userName">Olá,{user.name}</h1>
              <p className="userModule">{user.course_module}</p>
            </div>
          ) : null}
          <hr />
          <div className="techsList">
            <div className="buttonTech">
              <h3 className="techTitle">Tecnologias</h3>
              <button className="buttonAdd" onClick={() => setOpenModal(true)}>
                +
              </button>
            </div>
            <ul className="allTechs">
              {user?.techs?.length > 0 ? (
                user.techs.map((tech) => (
                  <li className="tech" key={tech.id} onClick={edit}>
                    <h4 className="singleTechTitle">{tech.title}</h4>
                    <p className="techStatus">{tech.status}</p>
                  </li>
                ))
              ) : (
                <p>Você não possui nenhuma tecnologia</p>
              )}
            </ul>
          </div>
        </main>
      </StyledDashboard>
    </>
  );
};
