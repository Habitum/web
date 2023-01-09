import styled from "styled-components";

export const StyledWave = styled.div`
position: absolute;
top: -1px;
left: 0;
width: 100%;
overflow: hidden;
line-height: 0;

svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 100px;
  
  .shape-fill {
    fill: var(--color-white);
  }
}
`;
