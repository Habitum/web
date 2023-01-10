import { iStyledHabitProps } from "./types";

import styled, { css } from "styled-components";

export const StyledHabitCard = styled.li`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  box-shadow: -.375rem .375rem 1.25rem rgba(36, 35, 69, 0.25);
  border-radius: var(--radius);

  .card-info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .card-info:first-child {
    font-size: var(--text-size-300);
    font-weight: var(--text-weight-300);
  }

  .constancy{
    color: var(--color-brand-100);
    font-size: var(--text-size-500);
  }

  .constancy span{
    margin-left: 2rem;
  }

  span{
    color: var(--color-grey-200);
    font-size: var(--text-size-500);
  }

  button{
    border: none;
    background: transparent;
  }
  
  .card-edit-box{
    display: flex;
    gap: 1rem;
  }

  .card-edit-box input{
    cursor: pointer;
  }

  ${({ variant }: iStyledHabitProps) => {
    switch (variant) {
      default:
      case "to-do":
        return css`
          border-left: 10px solid var(--color-alert);
            
          .checksquare{
            background-color: var(--color-alert);
            padding: .01rem .4rem;
            margin-right: .2rem;
          }
          
          .constancy{
            color: var(--color-brand-100);
          }

          .card-edit-box button{
            background-color: var(--color-grey-400);
          }

          .history-icon{
            display: none;
          }

          .checkbox-container{
            display: block;
            position: relative;
            font-size: 22px;
            user-select: none;
            padding-left: 2px;
            cursor: pointer;
          }

          .checkbox-container input{
            opacity: 0;
          }

          .checkmark{
            position:absolute;
            left:0;
            margin-top: .3rem;
            height: 1rem;
            width: 1rem;
            background-color: var(--color-okay);
          }

          .checkmark::after{
            content: "";
            position: absolute;
            display: none;
          }

          .checkbox-container input:checked ~ .checkmark::after{
            display: block;
          }

          .checkbox-container .checkmark::after{
            left: .3rem;
            top: .1rem;
            width: .2rem;
            height: .5rem;
            border: solid white;
            border-width: 0 3px 3px 0;
            transform: rotate(45deg);
          }
        `;
        case "done":
          return css`
          color: var(--color-white);
          background-color: var(--color-brand-200);
          border-left: 10px solid var(--color-okay);

          span{
            color: var(--color-grey-300);
          }
          .constancy{
            color: var(--color-white);
          }

          .card-edit-box button{
            color: var(--color-white);
          }

          .checkbox-container{
            display: none;
          }

          .card-edit-box:nth-child(2){
            color: var(--color-alert);
            cursor: pointer;
          }
          
        `;
    }
  }}
`
