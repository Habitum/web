import { iUser } from "../contexts/UserContext/types";

import { api } from "./api";

export async function addUserBits(id : number){

    const body = {
        bits: 0,
        stars: 0
    };
    const { data } = await api.patch<iUser>(`/users/${id}`, body);
    return data;
   }
 