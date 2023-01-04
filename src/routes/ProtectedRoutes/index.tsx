import React, { useContext, useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import { ImSpinner6 } from "react-icons/im";
import { StyledLoading } from "../../styles/loading";

import { UserContext } from "../../contexts/UserContext";



const ProtectedRoutes = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <>
      {user ? (
        <Outlet />
      ) : (
        
        <StyledLoading>
          <ImSpinner6 className="loading" />
        </StyledLoading>
      )}
    </>
  );
};

export default ProtectedRoutes;