import styled from "styled-components";

export const ItemContainer = styled.div`
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
`;

export const Abstract = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #333333;
  margin: 25px 0;

  span {
    margin-right: 30px;
  }

  img {
    margin-right: 30px;
  }
`;

export const ItemFooter = styled.div`
  color: #999;
  font-size: 11px;
  font-family: Helvetica, sans-serif;
`;
