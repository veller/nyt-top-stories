import styled from "styled-components";

export const ItemContainer = styled.article`
  display: flex;
  width: 80%;
  margin-bottom: 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ddd;
`;

export const PublishedDate = styled.div`
  color: #999;
  font-size: 11px;
  margin: 8px 0;
  width: 20%;
  font-family: Helvetica, sans-serif;
`;

export const Item = styled.div`
  width: 80%;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  color: #121212;
  font-size: 23px;
  letter-spacing: 0.2px;
  font-weight: 700;
  margin-bottom: 8px;

  span {
    cursor: pointer;
  }

  span:hover {
    text-decoration: underline;
  }

  span:last-child {
    text-decoration: none;
    cursor: default;
    color: #999;
    font-size: 11px;
    font-weight: 500;
    font-family: Helvetica, sans-serif;
    margin-top: 10px;
  }
`;

export const Abstract = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #333333;
  margin: 25px 0;

  flex-direction: column-reverse;

  span {
    margin: 10px 30px 0 0;
  }

  img {
    margin-right: 30px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
