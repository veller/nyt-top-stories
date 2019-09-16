import React, { useState } from "react";
import moment from "moment";
import {
  ItemContainer,
  PublishedDate,
  Item,
  Title,
  Abstract
} from "./Article.styles";

function Article({ item }) {
  const [isAbstractShown, setAbstractShow] = useState(false);
  const hasMedia = !!item.multimedia.length;

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
          <span>{item.byline}</span>
        </Title>
        {isAbstractShown && (
          <Abstract>
            <span>{item.abstract}</span>
            {hasMedia && (
              <a target="blank" href={item.url}>
                <img
                  src={item.multimedia[2].url}
                  alt={item.multimedia[2].caption}
                />
              </a>
            )}
          </Abstract>
        )}
      </Item>
    </ItemContainer>
  );
}

export default Article;
