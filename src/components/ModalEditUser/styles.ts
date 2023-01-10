import styled from "styled-components";

import { FaUserEdit } from "react-icons/fa";

import { ModalBox } from "../../styles/modal";

export const ModalBaseStyled = styled(ModalBox)`
  background-color: white;
  padding-top: 25px;
  max-width: 100%;
  height: 100%;
  border-radius: 16px;
  
  @media(min-width: 700px){
    padding-top: 25px;
    max-width: 400px;
    height: 578px;
  }
  form{
    width: 100%;
    margin-top: 90px;
    @media(min-width: 700px){
    margin-top: 0px;
  }
    label{
      margin: 0 auto;
      width: 60%;
      @media(min-width: 700px){
        width: 80%;
      }
    }
    input{
      margin: 0 auto;
      width: 60%;
      margin-bottom: 40px;
      @media(min-width: 700px){
        margin-bottom: 20px;
        width: 80%;
      }
    }
     .FormError {
    font-size: var(--text-size-500);
    color: var(--color-alert);
    width: 60%;
    margin: 0 auto;
    @media(min-width: 700px){
      width: 80%;
    }
  }
  }
 

  .button-div{
    width: 100%;
    height: 138px;
    margin-top: 105px;
    padding: 43px;
    background-color: var(--color-grey-400);
    display: flex;
    justify-content: center;
    gap: 35px;
    border-radius: 16px;

    @media(min-width: 700px){
      height: 100px;
      margin-top: 16px;
      padding: 24px;
    }
    button:first-child{
     background-color: transparent;
     font-size: var(--text-button-size-100);
     font-weight: var(--text-weight-200);
     margin-bottom: 9px;
     border: none;
    }
  }
 
`

export const EditIcon = styled(FaUserEdit)`
  background-color: var(--color-brand-200);
  color: var(--color-grey-300);
  border-radius: 100%;
  width: 32px;
  height: 32px;
  padding: 5px;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
`

export const EditUser = styled.div`
  
  margin: 0px auto;
  width: 180px;
  border-bottom: 2px solid var(--color-brand-200);
  padding-bottom: 25px;
  margin-top: 25px;
  @media(min-width: 700px){
    margin-top: 0px;
  }

  div:first-child{
    position: relative;
    width: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    .profile-img{
     background-color: var(--color-grey-300);
     border-radius: 100%;
     width: 150px;
  }
  }
 
`


export const SelectPic = styled.div`
  position: absolute;
  background-color: var(--color-brand-200);
  width: 260px;
  height: 150px;
  left: 50%;
  transform: translateX(-50%);
  bottom: -148px;
  z-index: 3;
  border-radius: 16px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 8px;
  overflow: auto;
  @media(min-width: 700px){
    left: 75px;
    bottom: -148px;
    transform: translateX(0);
  }

  img{
    background-color: var(--color-grey-300);
    border-radius: 100%;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: .5s;

    :hover{
      transform: scale(1.05);
    }
  }
`