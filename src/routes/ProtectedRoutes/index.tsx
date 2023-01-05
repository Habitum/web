import React, { useContext, useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

// import { ImSpinner6 } from "react-icons/im";
// import { StyledLoading } from "../../styles/loading";

import { UserContext } from "../../contexts/UserContext/UserContext";

const ProtectedRoutes = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {user ? (
        <Outlet />
      ) : (
        <>
          <h1>Loading Temporário</h1>
        </>
      )}
    </>
  );
};

export default ProtectedRoutes;
