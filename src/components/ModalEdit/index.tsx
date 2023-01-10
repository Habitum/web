import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { useContext, useState } from "react";

import { ModalWrapper } from "../../styles/modal";
import { HabitsContext } from "../../contexts/HabitsContext/HabitsContext";
import { iEditForm } from "./types";
import { IconDelete, StyledModalEdit } from "./styles";
import Button from "../Button";
import Input from "../Input";
import ModalConfirmDelete from "../ModalConfirmDelete";

export const ModalEditHabit = () => {

  const [open, setOpen] = useState(false)

  const { habitEdit } = useContext(HabitsContext);

  const modalSchema = yup.object().shape({
    title: yup.string().required("Escolha um título"),
    description: yup.string(),
    difficulty: yup.string().required("Escolha uma dificuldade"),
    personal_reward: yup.string().required("É preciso haver uma recompensa"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditForm>({
    mode: "onBlur",
    resolver: yupResolver(modalSchema),
  });

  const submitEdit: SubmitHandler<iEditForm> = (data) => {};

  return (
    <ModalWrapper>
      <StyledModalEdit>
        <div className="headerModal">
          <h2>Editar Hábito</h2>
        </div>
        <form onSubmit={handleSubmit(submitEdit)} noValidate>
          <div className="formContainer">
            <div className="formContent">
              <div className="divMain">
                <Input
                  type="text"
                  name="title"
                  label="Título"
                  variant="primary"
                  register={register("title")}
                />
                {errors.title?.message && (
                  <p className="FormError">{errors.title.message}</p>
                )}

                <Input
                  type="text"
                  name="description"
                  variant="secondary"
                  label="Descrição (opcional)"
                  register={register("description")}
                />

                <Input
                  type="text"
                  name="reward"
                  label="Recompensa"
                  variant="primary"
                  register={register("personal_reward")}
                />
                {errors.personal_reward?.message && (
                  <p className="FormError">{errors.personal_reward.message}</p>
                )}
              </div>

              <div className="divSelect">
                <label htmlFor="difficulty" className="labelSelect">
                  Dificuldade
                </label>
                <select id="difficulty" {...register("difficulty")}>
                  <option value="Fácil">Fácil</option>
                  <option value="Médio">Médio</option>
                  <option value="Difícil">Difícil</option>
                </select>
                {errors.difficulty?.message && (
                  <p className="FormError">{errors.difficulty.message}</p>
                )}

                <div className="divIconDelete" onClick={() => setOpen(true)}>
                  <IconDelete />
                  <p>Excluir hábito</p>
                </div>
              </div>
            </div>
            <div className="bottomModal">
              <div className="divButton">
                <Button variant="cancel" name="CANCELAR" />
                <Button name="Salvar" variant="primary" />
              </div>
            </div>
          </div>
        </form>
        {open && <ModalConfirmDelete setOpen={setOpen}/>}
      </StyledModalEdit>
    </ModalWrapper>
  );
};
