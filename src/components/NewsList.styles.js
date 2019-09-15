import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-family: "Domine", serif;

  button {
    font-size: 11px;
    height: 30px;
    min-width: 130px;
    margin: 30px 0;
    padding: 9px 9px 7px;
    background-color: #ebebeb;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
