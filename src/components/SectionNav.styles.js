import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #000;
  font-size: 12px;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 8px 12px 8px;
  }

  li {
    text-transform: capitalize;
    cursor: pointer;
    padding: 4px;
  }

  li:hover {
    border-radius: 3px;
    transition: background-color 0.6s ease 0s;
    background-color: #f8f8f8;
    padding: 4px;
  }
`;
