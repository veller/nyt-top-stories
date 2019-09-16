import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 30px 0 5px 0;
  padding-bottom: 8px;
  font-size: 12px;

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 200px;
    position: absolute;
    left: 0;
    right: 0;
    top: 8px;
    margin-left: auto;
    margin-right: auto;
  }

  div:nth-child(1),
  div:nth-child(3) {
    display: none;
  }

  @media (min-width: 768px) {
    div:nth-child(1),
    div:nth-child(3) {
      display: block;
    }

    img {
      width: 350px;
    }
  }
`;
