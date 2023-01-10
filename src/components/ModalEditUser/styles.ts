import styled from "styled-components";
import { FaUserEdit } from "react-icons/fa";
import { ModalBox } from "../../styles/modal";

export const ModalBaseStyled = styled(ModalBox)`
  background-color: white;
  padding-top: 25px;
  max-width: 100%;
  height: 100%;
  
  @media(min-width: 700px){
    padding-top: 25px;
    max-width: 400px;
    height: 578px;
  }
  form{
    width: 100%;
    margin-top: 70px;
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
      margin-bottom: 30px;
      @media(min-width: 700px){
        width: 80%;
      }
    }
  }

  .button-div{
    width: 100%;
    height: 138px;
    margin-top: 75px;
    padding: 43px;
    background-color: var(--color-grey-400);
    display: flex;
    justify-content: center;
    gap: 35px;
    /* margin-bottom: 50px; */
    @media(min-width: 700px){
      height: 100px;
      margin-top: 0px;
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
  @media(min-width: 700px){
    margin-top: 0px;
  }

  div{
    position: relative;
    width: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    img{
     background-color: var(--color-grey-300);
     border-radius: 100%;
  }
  }
 
`