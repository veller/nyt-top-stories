import React, { useState } from "react";
import moment from "moment";
import {
  ItemContainer,
  PublishedDate,
  Item,
  Title,
  Abstract,
  ItemFooter
} from "./Article.styles";

function Article({ item }) {
  const [isAbstractShown, setAbstractShow] = useState(false);

  return (
    <ItemContainer>
      <PublishedDate>
        <span>{moment(item.published_date).format("MMM DD, YYYY")}</span>
      </PublishedDate>
      <Item>
        <Title>
          <span onClick={() => setAbstractShow(!isAbstractShown)}>
            {item.title}
          </span>
        </Title>
        {isAbstractShown && (
          <Abstract>
            <span>{item.abstract}</span>
            <a target="blank" href={item.url}>
              <img src={item.multimedia[2].url} alt="" />
            </a>
          </Abstract>
        )}
        <ItemFooter>
          <span>{item.byline}</span>
        </ItemFooter>
      </Item>
    </ItemContainer>
  );
}

export default Article;
