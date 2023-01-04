import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Inter', sans-serif;
  }

  :root {
    --color-brand-100: #5B21FF;
    --color-brand-200: #242345;
    --color-grey-100: #333333;
    --color-grey-200: #555555;
    --color-grey-300: #DDDDDD;
    --color-grey-400: #EEEEEE;
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-okay: #45FF26;
    --color-alert: #FF3838;
  }

  body {
    padding: 0 1.25rem;
  }
`;

export const MainContainer = styled.div`
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
`;
