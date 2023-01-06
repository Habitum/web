import styled from "styled-components";
 
export const StyledDashboardPage = styled.main`
   
    height: 100vh;
    width: 100%;
 
    header {
        width: 100%;
        height: 6rem;
        padding: 1.5rem 1rem;
        
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

 

    .hello{
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
        border: 1px solid #000;
        border-radius: var(--radius);
        width: max-content;
        padding: 1.5rem 1rem 1rem 1rem;
        min-width: 5rem;
        position: relative;
    }

    h5{
        position: absolute;
        background-color: #fff;
        top: 1;
        z-index: 1;
        padding: 0 0.5rem;
        
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
    gap:1.25rem;
 }
 
`
