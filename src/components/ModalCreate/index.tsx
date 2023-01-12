import { useContext } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

import { iModalForm, iModalProps } from "./types";
import { iHabitData } from "../../contexts/HabitsContext/types";
import { HabitsContext } from "../../contexts/HabitsContext/HabitsContext";
import { UserContext } from "../../contexts/UserContext/UserContext";

import { formModalSchema } from "./formModalSchema";

import { Modal, ModalHeader, ModalForm, ModalFooter } from "./styles";
import { ModalWrapper } from "../../styles/modal";

import { getUser } from "../../services/getUser";

import { useOutClick } from "../../hooks/useOutClick";

const ModalCreateHabit = ({ handleModal }: iModalProps) => {
  const { user, setUser } = useContext(UserContext);

  const { habitCreate, setIsOpenModalCreate } = useContext(HabitsContext);

  const dificulties = ["fácil", "médio", "difícil"];
  const constancies = ["7 dias seguidos", "14 dias seguidos", "21 dias seguidos"];

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iModalForm>({
    mode: "onChange",
    resolver: yupResolver(formModalSchema),
  });

  const submit: SubmitHandler<iModalForm> = async (data) => {
    if (user) {
      const body: iHabitData = { ...data, userId: +user.id };

      (await habitCreate(body)) && handleModal();

      const response = await getUser();
      setUser(response);
    }
  };

  const modalRef = useOutClick(() => setIsOpenModalCreate(null));

  return (
    <ModalWrapper>
      <Modal ref={modalRef}>
        <ModalHeader>
          <h4>Criar hábito</h4>
        </ModalHeader>

        <ModalForm onSubmit={handleSubmit(submit)}>
          <div className="FormContainer">
            <div className="side-left">
              <Input label="Título" name="title" type="text" placeholder="Insira o título para o hábito" register={register("title")} />
              <p className="FormError">
                <>{errors.title?.message}</>
              </p>
              <Input label="Descrição (opcional)" name="description" type="textarea" placeholder="Insira uma descrição" register={register("description")} />
              <Input label="Recompensa" name="personal_reward" type="text" placeholder="Qual a recompensa deste hábito?" register={register("personal_reward")} />
              <p className="FormError">
                <>{errors.personal_reward?.message}</>
              </p>
            </div>

            <div className="side-right">
              <Select label="Dificuldade" name="dificulty" options={dificulties} register={register("dificulty")} />
              <Select label="Meta de constância" name="constancy" options={constancies} register={register("constancy")} />
              <p>Não será possível alterar a meta de constância após o hábito ser criado</p>
            </div>
          </div>
          <ModalFooter>
            <Button name="cancelar" variant="cancel" onClick={handleModal} />
            <Button name="CRIAR" variant="primary" />
          </ModalFooter>
        </ModalForm>
      </Modal>
    </ModalWrapper>
  );
};

export default ModalCreateHabit;
