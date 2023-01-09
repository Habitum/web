import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";

import { StyledRanking } from "./styles";

const Ranking = () => {
  const {getUsersList} = useContext(UserContext)

  getUsersList()


  return <StyledRanking></StyledRanking>;
};

export default Ranking;
