/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";

import { UserContext } from "../../contexts/UserContext/UserContext";

import { iUser } from "../../contexts/UserContext/types";

import { StyledRanking } from "./styles";

import defaultUser from "../../assets/img/default-user.svg";
import logotipo from "../../assets/img/logotipo.svg";

const Ranking = () => {
  const [users, setUsers] = useState<iUser[] | undefined>([] as iUser[]);
  const { getUsersList } = useContext(UserContext);

  useEffect(() => {
    async function getUsers() {
      const usersList = await getUsersList();

      setUsers(usersList);
    }

    getUsers();
  }, []);

  return (
    <StyledRanking>
      <h2>Ranking Geral</h2>
      <ul>
        {users &&
          users?.map((user) => (
            <li key={user.id}>
              <img src={user.img ? user.img : defaultUser} alt={user.name} />
              <p>{user.name}</p>
              <div>
                <span>{user.bits}</span>
                <img src={logotipo} alt="" />
              </div>
            </li>
          ))}
      </ul>
    </StyledRanking>
  );
};

export default Ranking;
