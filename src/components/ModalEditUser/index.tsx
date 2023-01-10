import { ModalBox, ModalWrapper } from "../../styles/modal"

import { EditIcon, EditUser, ModalBaseStyled } from "./styles"
import ProfilePicture from "../../assets/img/male_2 6.svg"
import Input from "../Input"
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iModalBaseProps,iEditForm } from "./types";
import { formEditSchema } from "./schema";
import Button from "../Button";
import { HabitsContext } from "../../contexts/HabitsContext/HabitsContext";
import { useContext } from "react";


const ModalProfileEdit = ( { setModal} : iModalBaseProps) => {
    
  const { userEdit } = useContext(HabitsContext);
  
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iEditForm>({ mode: "onChange", resolver: yupResolver(formEditSchema) });

  const onHandleSubmit: SubmitHandler<iEditForm> = (data)=> {
     userEdit(data)
     setModal(false)
  }
  
    return (
        <ModalWrapper>
          <ModalBaseStyled>
            <EditUser>
              <div>
                <img src={ProfilePicture} alt="imagem de perfil"/>
                <EditIcon />
              </div>
            </EditUser>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
              <Input type={"text"} label={"Nome"} name={"name"} placeholder={"Digite seu nome"} register={register("name")}/>
              <Input type={"text"} label={"UserName"} name={"userName"} placeholder={"Digite seu UserName"} register={register("userName")}/>
              <Input type={"email"} label={"Email"} name={"email"} placeholder={"Digite seu email"} register={register("email")}/>
                  
              <div className="button-div">
                <button onClick={()=> setModal(false)}>Cancelar</button>
                <Button name={"Salvar"} variant={"primary"} />
              </div>
            </form>
          </ModalBaseStyled>
        </ModalWrapper>
    )
}

export default ModalProfileEdit
