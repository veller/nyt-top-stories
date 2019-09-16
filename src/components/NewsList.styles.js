import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-family: "Domine", serif;
  /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06); */

  button {
    font-size: 11px;
    height: 50px;
    width: 100%;
    min-width: 130px;
    background-color: #ebebeb;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.3px;
    cursor: pointer;
    margin-bottom: 10px;
  }

  article:nth-child(3) {
    border-bottom: ${props =>
      props.isAllItemsShown ? "1px solid #ddd" : "none"};
  }

  article:last-child {
    border-bottom: ${props =>
      props.isAllItemsShown ? "none" : "1px solid #ddd"};
  }

  @media (min-width: 768px) {
    button {
      height: 30px;
      width: 100px;
    }
  }
`;
