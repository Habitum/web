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

  .edit-icon, .check-icon, .history-icon{
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

          .check-icon{
            color: var(--color-okay);
          }

          .checkbox-container{
            display: block;
            position: relative;
            padding-left: 2px;
            cursor: pointer;
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

          .edit-icon{
            color: var(--color-white);
          }

          .checkbox-container{
            display: none;
          }

          .history-icon{
            color: var(--color-alert);
          }
          
        `;
    }
  }}
`
