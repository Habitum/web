import { useContext,useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../Button";
import { ModalWrapper } from "../../styles/modal";
import Input from "../Input";

import { iModalBaseProps, iEditForm } from "./types";

import { formEditSchema } from "./schema";

import { HabitsContext } from "../../contexts/HabitsContext/HabitsContext";

import { ModalBaseStyled, EditUser, EditIcon, SelectPic } from "./styles";

import female1 from "../../assets/profilePics/female_1 1.svg";
import female2 from "../../assets/profilePics/female_1 2.svg";
import female3 from "../../assets/profilePics/female_1 3.svg";
import female4 from "../../assets/profilePics/female_1 4.svg";
import female5 from "../../assets/profilePics/female_1 5.svg";
import female6 from "../../assets/profilePics/female_1 6.svg";
import female7 from "../../assets/profilePics/female_2 1.svg";
import female8 from "../../assets/profilePics/female_2 2.svg";
import female9 from "../../assets/profilePics/female_2 3.svg";
import female10 from "../../assets/profilePics/female_2 4.svg";
import female11 from "../../assets/profilePics/female_2 5.svg";
import female12 from "../../assets/profilePics/female_2 6.svg";
import male1 from "../../assets/profilePics/male_1 1.svg";
import male2 from "../../assets/profilePics/male_1 2.svg";
import male3 from "../../assets/profilePics/male_1 3.svg";
import male4 from "../../assets/profilePics/male_1 4.svg";
import male5 from "../../assets/profilePics/male_1 5.svg";
import male6 from "../../assets/profilePics/male_1 6.svg";
import male7 from "../../assets/profilePics/male_2 1.svg";
import male8 from "../../assets/profilePics/male_2 2.svg";
import male9 from "../../assets/profilePics/male_2 3.svg";
import male10 from "../../assets/profilePics/male_2 4.svg";
import male11 from "../../assets/profilePics/male_2 5.svg";
import male12 from "../../assets/profilePics/male_2 6.svg";
import defaultUser from "../../assets/img/default-user.svg";

const ModalProfileEdit = ({ setModal, profilePic, setProfile }: iModalBaseProps) => {

  const [openPic, setOpenPic] = useState(false);

  const { userEdit, setModalOn } = useContext(HabitsContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iEditForm>({ mode: "onChange", resolver: yupResolver(formEditSchema), });

  const onHandleSubmit: SubmitHandler<iEditForm> = (data) => {
    userEdit(data);
    setModalOn(false);
  };

  const changePicture = (img : string) => {
      setProfile(img);
      setOpenPic(false);
      const body ={
        img: img,
      };
      userEdit(body);
      
  };
  
  const openPictureSelection = () => {
     if(!openPic){
       setOpenPic(true);
     }
     if(openPic){
      setOpenPic(false);
     }
  };

  return (
    <ModalWrapper>
      <ModalBaseStyled>
        <EditUser>
          <div>
            <img className="profile-img" src={defaultUser} alt="imagem de perfil" />
            <EditIcon onClick={openPictureSelection}/>
            {openPic && <SelectPic>
               <img src={female1} alt="avatar" onClick={()=> changePicture(female1)}/>
               <img src={female2} alt="avatar" onClick={()=> changePicture(female2)}/>
               <img src={female3} alt="avatar" onClick={()=> changePicture(female3)}/>
               <img src={female4} alt="avatar" onClick={()=> changePicture(female4)}/>
               <img src={female5} alt="avatar" onClick={()=> changePicture(female5)}/>
               <img src={male6} alt="avatar" onClick={()=> changePicture(male6)}/>
               <img src={male7} alt="avatar" onClick={()=> changePicture(male7)}/>
               <img src={male8} alt="avatar" onClick={()=> changePicture(male8)}/>
               <img src={male9} alt="avatar" onClick={()=> changePicture(male9)}/>
               <img src={male10} alt="avatar" onClick={()=> changePicture(male10)}/>
               <img src={male11} alt="avatar" onClick={()=> changePicture(male11)}/>
               <img src={female6} alt="avatar" onClick={()=> changePicture(female6)}/>
               <img src={female7} alt="avatar" onClick={()=> changePicture(female7)}/>
               <img src={female8} alt="avatar" onClick={()=> changePicture(female8)}/>
               <img src={female9} alt="avatar" onClick={()=> changePicture(female9)}/>
               <img src={female10} alt="avatar" onClick={()=> changePicture(female10)}/>
               <img src={female11} alt="avatar" onClick={()=> changePicture(female11)}/>
               <img src={female12} alt="avatar" onClick={()=> changePicture(female12)}/>
               <img src={male1} alt="avatar" onClick={()=> changePicture(male1)}/>
               <img src={male2} alt="avatar" onClick={()=> changePicture(male2)}/>
               <img src={male3} alt="avatar" onClick={()=> changePicture(male3)}/>
               <img src={male4} alt="avatar" onClick={()=> changePicture(male4)}/>
               <img src={male5} alt="avatar" onClick={()=> changePicture(male5)}/>
               <img src={male12} alt="avatar" onClick={()=> changePicture(male12)}/>
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
