import React, { useState, useEffect } from "react";
import { GlobalStyle, SectionTitle } from "./components/Global.styles";
import Header from "./components/Header";
import SectionNav from "./components/SectionNav";
import NewsList from "./components/NewsList";

function App() {
  const API_KEY = "wdCf1FHAzoLfSiVXsi5EUJkxNp526oxU";
  const [query, setQuery] = useState("science");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const showItensInitialState = 3;
  const [showItems, setShowItems] = useState(showItensInitialState);
  const [isAllItemsShown, setAllItemsShow] = useState(false);
  const URL = `https://api.nytimes.com/svc/topstories/v2/${query}.json?api-key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      setShowItems(showItensInitialState);
      setAllItemsShow(false);

      try {
        const result = await fetch(URL);
        const data = await result.json();
        setData(data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [URL]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <SectionNav setQuery={setQuery} />
      <SectionTitle>
        <span>{`${query} news`}</span>
      </SectionTitle>
      <NewsList
        isError={isError}
        isLoading={isLoading}
        data={data.results}
        showItems={showItems}
        setShowItems={setShowItems}
        isAllItemsShown={isAllItemsShown}
        setAllItemsShow={setAllItemsShow}
      />
    </>
  );
}

export default App;

// to dos
// alinhar o logo no centro da tela. 33% para cada div da nav?
// remover border-bottom do último Article
// alinhar o texto "show more" dentro do Botão na NewsList
// como usar reduce para exibir Articles na NewsList?
// como tratar erro de undefined. exemplo: Cannot read property 'url' of undefined - World Two Major Saudi Oil...
