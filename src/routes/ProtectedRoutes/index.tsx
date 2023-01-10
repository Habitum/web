import React, { useContext } from "react";

import { Outlet, Navigate } from "react-router-dom";

import Rolling from "../../assets/img/rolling.svg";

import { UserContext } from "../../contexts/UserContext/UserContext";

import { StyledRolling } from "../../styles/rolling";

const ProtectedRoutes = () => {
  const { user, globalLoading } = useContext(UserContext);

  if (globalLoading) {
    return (
      <StyledRolling>
        <img src={Rolling} width="40px" alt="loading spinner" />
        <p>Carregando...</p>
      </StyledRolling>
    );
  }

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
