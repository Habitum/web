import styled from "styled-components";
 
export const StyledDashboardPage = styled.main`

  height: 100vh;
  width: 100%;

  button, label{
    cursor: pointer;
  }

  h2{
    color: var(--color-brand-100);
    font-family: var(--font-family-racing-sans-one);
    font-weight: var(--text-weight-400);
    font-size: var( --text-size-100);
  }
 
  h4{
    font-family: var(----font-family-inter);
    font-weight: var(--text-weight-700);
    font-size: var( --text-size-200);
  }

  .dropdown-menu{
    position: relative;
  }

  .dropdown-menu label{
    text-align: center;
    position: relative;
    display: block;
  }

  .dropdown-menu label i{
    position: absolute;
  }

  .dropdown-menu [type="radio"]{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .status-info{
    position: absolute;
    opacity: 0;
    padding: 1.25rem;
    transition: 0.4s ease;
  }

  .close-tab{
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
  }

  [type='radio']:checked ~ label{
    z-index: 1;
    opacity: 0;
  }

  [type='radio']:checked ~ label ~ .status-info{
    z-index: 1;
    opacity: 1;
  }

  [type='radio']:checked ~ label ~ .close-tab{
    z-index: 3;
    opacity: 1;
  }

  .user-welcome{
    text-align: end;
    padding: 1.5rem 1rem;
  }
 
  .username{
    font-family: var(----font-family-inter);
    font-weight: var(--text-weight-700);
    font-size: var( --text-size-300);
  }

  .status-section{
    width: 50%;
  }

  .status-item{
    border: .0625rem solid #000;
    border-radius: var(--radius);
    width: max-content;
    padding: 24px 16px 16px 16px;
    min-width: 80px;
    position: relative;
  }

  h5{
    position: absolute;
    background-color: #fff;
    top: 1;
    z-index: 1;
    padding: 0 8px;      
  }

  .quote{
    font-family: var(----font-family-inter);
    font-weight: var(--text-weight-400);
    font-size: var( --text-size-400);
    color: var(--color-grey-200);
    font-style: italic;
  }

  .flex{
    display: flex;
  }

  .column{
    flex-direction: column;
   }

  .between{
    justify-content: space-between;
  }

   .gap-125{
    gap:20px;
   }
 
`
export const StyledHeader = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;

  nav{
    display: flex;
    gap: 1.25rem;
  }

  .username{
    font-family: var(--font-family-inter);
    font-weight: var(--text-weight-200);
    font-size: var(--text-size-300);
    display: none;
  }

  .user-img{
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 11.25rem;
    background: none;
    border: none;
    cursor: pointer;
  }

  .edit-user{
    opacity: 0;
  }
  
  .edit-user:hover{
    opacity: 1;
  }

  .logout-btn{
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
  }

  @media (min-width: 650px){
    .username{
      display: block;
    }
  }
`