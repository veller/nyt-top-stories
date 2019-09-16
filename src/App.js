import React, { useState, useEffect } from "react";
import { GlobalStyle, SectionTitle } from "./components/Global.styles";
import Header from "./components/Header";
import SectionNav from "./components/SectionNav";
import NewsList from "./components/NewsList";

const SHOW_ITEMS_INITIAL_STATE = 3;

function App() {
  const API_KEY = "wdCf1FHAzoLfSiVXsi5EUJkxNp526oxU";
  const [query, setQuery] = useState("science");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [showItems, setShowItems] = useState(SHOW_ITEMS_INITIAL_STATE);
  const [isAllItemsShown, setAllItemsShow] = useState(false);
  const URL = `https://api.nytimes.com/svc/topstories/v2/${query}.json?api-key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      setShowItems(SHOW_ITEMS_INITIAL_STATE);
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

//to do
//componente para buscar dados AppData
//separar componentes em suas pastas - componente/style/test
//rota para http://localhost:3000/nyttop
//seu código deve possui um script inicializador, uma sugestão é o uso de Makefiles para rodar os comandos
//README deve conter informações relevantes arquiteturais, explicações e comentários, e conter todas as informações necessárias para rodar o problema
