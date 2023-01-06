import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext/UserContext";

import { StyledDashboardPage } from "./styles";

  const Dashboard = () => {
  const { userLogout, user } = useContext(UserContext);

  const todayDate = new Intl.DateTimeFormat('pt-BR', {
    month:'long',
    day:'2-digit',
    year:'numeric',
  }).format(new Date())

  return user ? (
    <StyledDashboardPage>
      <header className="flex between">
        <h2>habitum</h2>
        <nav className="flex gap-125">
          <h3 className="username">username</h3>
          <button>avatar</button>
          <button onClick={() => userLogout()}>Sair</button>
        </nav>
      </header>
      <section className="hello">
        <h1>{user.userName}</h1>
        <p>Terça-feira, {todayDate}</p>
      </section>
      <main className="flex between gap-125">
        <section className="status-section flex column gap-125">
          <h4>status geral</h4>
          <ul className="flex column gap-125">
            <li>
              <h5>Estrelas</h5>
              <div className="status-item">
                <span>3</span>
              </div>
            </li>
            <li>
              <h5>Bits</h5>
              <div className="status-item">
                <span>615</span>
              </div>
            </li>
            <li>
              <h5>Constância</h5>
              <div className="status-item">
                <span>11 dias</span>
              </div>
            </li>
            <li>
              <h5>Ranking Geral</h5>
              <div className="status-item">
                <span>8ª posição</span>
              </div>
            </li>
          </ul>

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
                <button>editar</button>
                <input type="checkbox" name="check" id="check" />
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
