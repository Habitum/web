import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext/UserContext";

import { StyledDashboardPage, StyledHeader } from "./styles";

import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { BsFillPeopleFill, BsPencilSquare, BsPencilFill, BsFillStarFill } from "react-icons/bs"
import { RiHistoryFill } from "react-icons/ri"
import { HiOutlineLogout, HiFire } from "react-icons/hi"

const Dashboard = () => {
  const { userLogout, user } = useContext(UserContext);

  const todayDate = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    month:'long',
    day:'2-digit',
    year:'numeric',
  }).format(new Date())

  return user ? (
    <StyledDashboardPage>
      <StyledHeader>
        <h2>habitum</h2>
          <nav>
            <h3 className="username">{user.name}</h3>
            <button type="button" className="user-img">{user.img}<i className="edit-user"><BsPencilSquare/></i></button>
            <button className="logout-btn" onClick={() => userLogout()}><i><HiOutlineLogout/></i></button>
          </nav>
      </StyledHeader>
      
      <section className="user-welcome">
        <h1>Bem vindo de volta, {user.userName}</h1>
        <p>{todayDate}</p>
      </section>
      <main className="flex between gap-125">
        <section className="status-section flex column gap-125">

          <div className="dropdown-menu">
              <input type='radio' id='status' name="status"/>
              <label htmlFor="status">Ver status <i><FiChevronDown/></i></label>
            <div className="dropdown-menu close-tab">
              <input type="radio" id='close-tab' name="status"/>
              <label htmlFor="close-tab">Fechar status <i><FiChevronUp/></i></label>
            </div>

          <div className="status-info">
            <h4>status geral</h4>
              <ul className="flex column gap-125">
                <li>
                  <h5>Estrelas</h5>
                  <div className="status-item">
                    <span>3 <i><BsFillStarFill/></i></span>
                  </div>
                </li>
                <li>
                  <h5>Bits</h5>
                  <div className="status-item">
                    <span>615 <img src="./icons/favicon-32x32.png" alt="bit icon" /></span>
                  </div>
                </li>
                <li>
                  <h5>Constância</h5>
                  <div className="status-item">
                    <span>11 dias <i><HiFire/></i></span>
                  </div>
                </li>
                <li>
                  <h5>Ranking Geral</h5>
                  <div className="status-item">
                    <span>8ª posição <i><BsFillPeopleFill/></i></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
      

          <p className="quote">
            <q>
              Suba o primeiro degrau com fé. Não é necessário que você veja toda
              a escada. Apenas dê o primeiro passo.
            </q>
            Martin L. King
          </p>
        </section>

        <section>
          <div className="flex between">
            <h4>hábitos</h4>
            <button>Criar</button>
          </div>

          <ul>
            <li className="flex between">
              <div>
                <p>title</p>
                <p>
                  Constância: <span></span>
                </p>
              </div>

              <div className="flex between">
                <button><i><BsPencilFill/></i></button>
                  <input type="checkbox" name="check" id="check"/>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </StyledDashboardPage>
  ):(
    <Navigate to="/"/>
  );
};

export default Dashboard;
