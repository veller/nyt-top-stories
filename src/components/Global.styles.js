import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`    
    @import url('https://fonts.googleapis.com/css?family=Domine:400,700&display=swap');

    body {
        margin: 0;
        padding: 0 3%;
        color: #121212;
        font-family: Helvetica, sans-serif;
    }
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-size: 40px;
  font-weight: 700;
  margin: 50px 0;
`;
