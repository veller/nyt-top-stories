import React, { useState } from "react";
import { Container } from "./NewsList.styles";
import Article from "./Article";

function NewsList({
  isError,
  isLoading,
  data,
  showItems,
  setShowItems,
  isAllItemsShown,
  setAllItemsShow
}) {
  const items = () => {
    return data
      .slice(0, showItems)
      .map(item => <Article key={item.title} item={item} />);
  };

  const handleShowMoreItems = () => {
    setShowItems(data.length);
    setAllItemsShow(true);
  };

  console.log("data from NewsList", data);

  return (
    <Container>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {items()}
          {!isAllItemsShown && (
            <button onClick={handleShowMoreItems}>Show all</button>
          )}
        </>
      )}
    </Container>
  );
}

export default NewsList;
