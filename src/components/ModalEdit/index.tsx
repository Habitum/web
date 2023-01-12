import { useContext, useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import Button from "../Button";
import Input from "../Input";
import ModalDelete from "../ModalDelete";
import { ModalWrapper } from "../../styles/modal";
import { HabitsContext } from "../../contexts/HabitsContext/HabitsContext";

import { iEditModal } from "./types";

import { modalSchema } from "./schema";

import { IconDelete, StyledModalEdit } from "./styles";
import { iHabits } from "../../contexts/HabitsContext/types";

import { useOutClick } from "../../hooks/useOutClick";

export const ModalEditHabit = ({ setModal, id }: iEditModal) => {
  const [open, setOpen] = useState(false);

  const { habitEdit, setModalOn } = useContext(HabitsContext);

  const modalRef = useOutClick(() => setModalOn(null));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iHabits>({
    mode: "onBlur",
    resolver: yupResolver(modalSchema),
  });

  const submitEdit: SubmitHandler<iHabits> = async (data) => {
    const userID = Number(localStorage.getItem("@USER_ID"));

    data.userId = userID;

    habitEdit(id, data);

    setModal(false);
  };

  return (
    <ModalWrapper>
      <StyledModalEdit ref={modalRef}>
        <div className="headerModal">
          <h2>Editar Hábito</h2>
        </div>
        <form onSubmit={handleSubmit(submitEdit)} noValidate>
          <div className="formContainer">
            <div className="formContent">
              <div className="divMain">
                <Input type="text" name="title" label="Título" variant="primary" register={register("title")} />
                {errors.title?.message && <p className="FormError">{errors.title.message}</p>}

                <Input type="textarea" name="description" variant="secondary" label="Descrição (opcional)" register={register("description")} />
                {errors.description?.message && <p className="FormError">{errors.description.message}</p>}

                <Input type="text" name="reward" label="Recompensa" variant="primary" register={register("personal_reward")} />
                {errors.personal_reward?.message && <p className="FormError">{errors.personal_reward.message}</p>}
              </div>

              <div className="divSelect">
                <label htmlFor="difficulty" className="labelSelect">
                  Dificuldade
                </label>
                <select id="dificulty" {...register("dificulty")}>
                  <option value="Fácil">Fácil</option>
                  <option value="Médio">Médio</option>
                  <option value="Difícil">Difícil</option>
                </select>

                <div className="divIconDelete" onClick={() => setOpen(true)}>
                  <IconDelete />
                  <p>Excluir hábito</p>
                </div>
              </div>
            </div>
            <div className="bottomModal">
              <div className="divButton">
                <Button variant="cancel" name="CANCELAR" onClick={() => setModal(false)} />
                <Button name="Salvar" variant="primary" />
              </div>
            </div>
          </div>
        </form>
        {open && <ModalDelete id={id} setOpen={setOpen} />}
      </StyledModalEdit>
    </ModalWrapper>
  );
};
