import styled from "styled-components";

import { DefaultContainer } from "../../styles/container";

export const StyledHeader = styled.header`
  background-color: var(--color-white);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 0 1rem;
`;

export const Container = styled(DefaultContainer)`
  padding: 1.875rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;

  @media (min-width: 510px) {
    justify-content: space-between;
  }
`;

export const Nav = styled.nav`
  > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.125rem;
  }
`;
