import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";

import { StyledDashboardPage } from "./styles";

const Dashboard = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <StyledDashboardPage>
      <h1>Dashboard</h1>
      {/* Provisório para testes */}
      <button onClick={() => userLogout()}>Sair</button>
      {/* Provisório para testes */}
    </StyledDashboardPage>
  );
};

export default Dashboard;
