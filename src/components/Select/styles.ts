import styled from "styled-components";

export const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  margin-top: 1rem;

  label {
    font-weight: var(--text-weight-200);
    color: var(--color-grey-100);
    font-size: var(--text-size-400);
  }

  select {
    width: max-content;
    padding: .625rem 1rem;
    font-weight: var(--text-weight-300);
    border: 0.1rem solid var(--color-brand-200);
    border-radius: var(--radius);
    color: var(--color-brand-200);
    outline-color: var(--color-brand-100);
  }
`;
