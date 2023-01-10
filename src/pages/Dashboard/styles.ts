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
    font-weight: var(--text-weight-200);
    font-size: var( --text-size-300);
  }

  h5{
    position: absolute;
    background-color: #fff;
    top: 1;
    z-index: 1;
    padding: 0 8px;      
  }

  .username{
    font-family: var(----font-family-inter);
    font-weight: var(--text-weight-700);
    font-size: var( --text-size-300);
  }

  .user-welcome{
    padding: .5rem 1rem;
  }

  .date{
    color: var(--color-grey-200);
    font-size: var(--text-size-100);
    font-weight: var(--text-weight-200);
    margin: .5rem 0;
  }
 
  main{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.6rem;
  }

  .quote{
    display: none;
    font-family: var(----font-family-inter);
    font-weight: var(--text-weight-400);
    font-size: var( --text-size-400);
    color: var(--color-grey-200);
    font-style: italic;
  }

  @media (min-width: 600px){
    main{
      flex-direction: row;
    }

    .user-welcome{
      text-align: end;
    }

    .quote{
      display: block;
    }
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

  @media (min-width: 550px){
    .username{
      display: block;
    }
  }
`

export const StyledUserInfo = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1.25rem;

  .dropdown-menu{
    position: relative;
  }

  .dropdown-menu label{
    font-size: var(--text-size-400);
    font-weight: var(--text-weight-200);
    color: var(--color-brand-100);
    position: relative;
    display: inline-block;
    margin: 1% 30%;
  }

  .dropdown-menu i{
    color: var(--color-brand-100);
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
    margin-top: 2rem;
    transition: 0.4s ease;
  }

  .status-info h4{
    margin-bottom: 1rem;
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

  [type='radio']:checked ~ i{
    z-index: 1;
    opacity: 0;
  }

  [type='radio']:checked ~ label ~ .status-info{
    position: relative;
    z-index: 1;
    opacity: 1;
  }

  [type='radio']:checked ~ label ~ .close-tab{
    z-index: 3;
    opacity: 1;
  }

  ul{
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  li div{
    border: .0625rem solid #000;
    border-radius: var(--radius);
    width: max-content;
    padding: 24px 16px 16px 16px;
    min-width: 80px;
    position: relative;
  }

  li div span{
    display: flex;
    align-items: center;
    font-size: var(--text-size-200);
    font-weight: var(--text-weight-100);
    color: var(--color-brand-100);
    gap: .5rem;
  }
`

export const StyledHabitsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 .5rem;

  .habits-list-title{
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }

  .habits-list-title button{
    font-size: .75rem;
    padding: .5rem;
  }

  @media (min-width: 600px){
    .habits-list-title{
      flex-direction: row;
    }
  }
`

export const StyledHabitsList = styled.ul`
  width: 100%;
  height: fit-content;
  max-height: 25rem;
  background-color: var(--color-grey-400);

  display: flex;
  flex-direction: column;
  gap: .7rem;

  margin-top: 1rem;
  padding: .7rem;
  border-radius: var(--radius);
  overflow: auto;
`