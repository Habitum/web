/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";

import { UserContext } from "../../contexts/UserContext/UserContext";

import rolling from "../../assets/img/rolling.svg";

import { iUser } from "../../contexts/UserContext/types";

import { StyledRanking } from "./styles";

import defaultUser from "../../assets/img/default-user.svg";
import logotipo from "../../assets/img/logotipo.svg";

const Ranking = () => {
  const [users, setUsers] = useState<iUser[] | undefined>([] as iUser[]);
  const [usersLoading, setUsersLoading] = useState(true);
  const { getUsersList } = useContext(UserContext);

  useEffect(() => {
    async function getUsers() {
      const usersList = await getUsersList();

      setUsers(usersList);
      setUsersLoading(false);
    }

    getUsers();
  }, []);

  if (usersLoading) {
    return (
      <StyledRanking>
        <h2>Ranking Geral</h2>
        <ul>
          <li className="LoadingRank">
            <img src={rolling} alt="rolando" width="40px" />
          </li>
        </ul>
      </StyledRanking>
    );
  }

  return (
    <StyledRanking>
      <h2>Ranking Geral</h2>
      <ul>
        {users &&
          users?.map((user) => (
            <li key={user.id}>
              <img src={defaultUser} alt={user.name} />
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
