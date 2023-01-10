import { ModalWrapper } from "../../styles/modal";

import ProfilePicture from "../../assets/img/male_2 6.svg";
import Input from "../Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { formEditSchema } from "./schema";
import Button from "../Button";
import { HabitsContext } from "../../contexts/HabitsContext/HabitsContext";
import { useContext,useState } from "react";
import { ModalBaseStyled, EditUser, EditIcon, SelectPic } from "./styles";
import { iModalBaseProps, iEditForm } from "./types";

const ModalProfileEdit = ({ setModal, profilePic }: iModalBaseProps) => {
  const { userEdit } = useContext(HabitsContext);
  const [openPic, setOpenPic] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iEditForm>({ mode: "onChange", resolver: yupResolver(formEditSchema), });

  const onHandleSubmit: SubmitHandler<iEditForm> = (data) => {
    userEdit(data);
    setModal(false);
  };

  const openPictureSelection = () => {
     if(!openPic){
       setOpenPic(true)
     }
     if(openPic){
      setOpenPic(false)
     }
  }

  return (
    <ModalWrapper>
      <ModalBaseStyled>
        <EditUser>
          <div>
            <img src={profilePic} alt="imagem de perfil" />
            <EditIcon onClick={openPictureSelection}/>
            {openPic && <SelectPic>
               
            </SelectPic>}
          </div>
        </EditUser>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <Input
            type={"text"}
            label={"Nome"}
            name={"name"}
            placeholder={"Digite seu nome"}
            register={register("name")}
          />
          {errors.name && (
            <p className="FormError">
              <>{errors.name.message}</>
            </p>
          )}
          <Input
            type={"text"}
            label={"UserName"}
            name={"userName"}
            placeholder={"Digite seu UserName"}
            register={register("userName")}
          />
          {errors.userName && (
            <p className="FormError">
              <>{errors.userName.message}</>
            </p>
          )}
          <Input
            type={"email"}
            label={"Email"}
            name={"email"}
            placeholder={"Digite seu email"}
            register={register("email")}
          />
          {errors.email && (
            <p className="FormError">
              <>{errors.email.message}</>
            </p>
          )}

          <div className="button-div">
            <button onClick={() => setModal(false)}>Cancelar</button>
            <Button name={"Salvar"} variant={"primary"} />
          </div>
        </form>
      </ModalBaseStyled>
    </ModalWrapper>
  );
};

export default ModalProfileEdit;
