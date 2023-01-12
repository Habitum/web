import styled from "styled-components";

export const StyledDashboardPage = styled.main`
  height: 100vh;
  width: 100%;

  button,
  label {
    cursor: pointer;
  }

  h2 {
    color: var(--color-brand-100);
    font-family: var(--font-family-racing-sans-one);
    font-weight: var(--text-weight-400);
    font-size: var(--text-size-100);
  }

  h4 {
    font-family: var(----font-family-inter);
    font-weight: var(--text-weight-200);
    font-size: var(--text-size-300);
    margin-bottom: 1rem;
  }

  h5 {
    position: absolute;
    background-color: #fff;
    top: 1;
    z-index: 1;
    padding: 0 8px;
  }

  .username {
    font-family: var(----font-family-inter);
    font-weight: var(--text-weight-700);
    font-size: var(--text-size-300);
  }

  .user-welcome {
    padding: 0.5rem 1rem;
  }

  .date {
    color: var(--color-grey-200);
    font-size: var(--text-size-100);
    font-weight: var(--text-weight-200);
    margin: 0.5rem 0;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.6rem;
    margin-top: 3rem;
  }

  .quote {
    display: none;
    font-family: var(----font-family-inter);
    font-weight: var(--text-weight-400);
    font-size: var(--text-size-400);
    color: var(--color-grey-200);
    font-style: italic;
  }

  @media (min-width: 500px) {
    main {
      flex-direction: row;
    }

    .user-welcome {
      text-align: end;
    }

    .quote {
      display: block;
    }
  }
`;
export const StyledHeader = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;

  nav {
    display: flex;
    gap: 1.25rem;
    align-items: center;
  }

  .username {
    font-family: var(--font-family-inter);
    font-weight: var(--text-weight-200);
    font-size: var(--text-size-300);
    display: none;
  }

  .user-img {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 11.25rem;
    border: none;
    cursor: pointer;
    position: relative;
  }

  .user-img img {
    opacity: 0.4;
  }

  .edit-user {
    width: 0.8rem;
    height: 1rem;
    opacity: 0;
    position: absolute;
    top: 0.8em;
    left: 0.8em;
    z-index: 1;
  }

  .edit-user:hover {
    opacity: 1;
  }

  .nav-icon {
    width: 1.2rem;
    height: 1.2rem;
  }

  .logout-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
  }

  @media (min-width: 550px) {
    .username {
      display: block;
    }
  }
`;

export const StyledUserInfo = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1.25rem;

  .dropdown-menu {
    position: relative;
  }

  .dropdown-menu label {
    font-size: var(--text-size-400);
    font-weight: var(--text-weight-200);
    color: var(--color-brand-100);
    position: relative;
    display: inline-block;
    margin: 1% 30%;
  }

  .dropdown-menu i {
    color: var(--color-brand-100);
  }

  .dropdown-menu [type="radio"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .status-info {
    position: absolute;
    opacity: 0;
    margin-top: 2rem;
    transition: 0.4s ease;
  }

  .status-info h4{
    margin-bottom: 1rem;
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

  [type="radio"]:checked ~ label {
    z-index: 1;
    opacity: 0;
  }

  [type="radio"]:checked ~ i {
    z-index: 1;
    opacity: 0;
  }

  [type="radio"]:checked ~ label ~ .status-info {
    position: relative;
    z-index: 1;
    opacity: 1;
  }

  [type="radio"]:checked ~ label ~ .close-tab {
    z-index: 3;
    opacity: 1;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  li div {
    border: 0.0625rem solid #000;
    border-radius: var(--radius);
    width: max-content;
    padding: 24px 16px 16px 16px;
    min-width: 80px;
    position: relative;
  }

  li div span {
    display: flex;
    align-items: center;
    font-size: var(--text-size-200);
    font-weight: var(--text-weight-100);
    color: var(--color-brand-100);
    gap: 0.5rem;
  }
`;

export const StyledHabitsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;

  .habits-list-title{
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: end;
    gap: 2rem;
  }

  .habits-list-title button {
    font-size: 0.75rem;
    padding: 0.5rem;
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
  gap: 0.7rem;
  margin-top: 1rem;
  padding: 0.7rem;
  border-radius: var(--radius);
  overflow: auto;
  align-items: start;
`;
