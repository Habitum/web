import styled from "styled-components";

import { DefaultContainer } from "../../styles/container";

export const StyledFooter = styled.section`
  background-color: var(--color-black);
  color: var(--color-grey-300);
  padding: 2.5rem 1.25rem;
`;

export const ContainerFooter = styled(DefaultContainer)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  text-align: right;
  font-size: 0.75rem;

  @media (min-width: 850px) {
    text-align: center;
  }
`;

export const LinksGroups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 12.5rem;

  a {
    text-decoration: none;
    color: var(--color-grey-300);
    transition: var(--transition);
    font-weight: var(--text-weight-500);

    :hover {
      color: var(--color-brand-100);
    }
  }
`;

export const LinksIconsGroup = styled(LinksGroups)`
  width: max-content;
  flex-direction: row;

  @media (min-width: 850px) {
    flex-direction: column;
  }
`;

export const LinkIconFooter = styled.a`
  background-color: var(--color-brand-100);
  color: var(--color-white);
  text-decoration: none;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.375rem;
  cursor: pointer;

  :hover {
    background-color: var(--color-brand-200);
  }
`;
