import styled from "styled-components";
 
export const StyledDashboardPage = styled.main`

  height: 100vh;
  width: 100%;
 
  header {
    width: 100%;
    height: 96px;
    padding: 24px 16px;  
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
    position: relative;
    cursor: pointer;
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
    margin: 0;
    z-index: 1;
  }

  .status-info{
    position: absolute;
    top:100%;
    opacity: 0;
    left:0;
    padding: 1.25rem;
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

  .hello{
    text-align: end;
    padding: 24px 16px;
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
