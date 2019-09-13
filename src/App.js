import React, { useState, useEffect } from "react";

function App() {
  const API_KEY = "wdCf1FHAzoLfSiVXsi5EUJkxNp526oxU";
  const [query, setQuery] = useState("science");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const URL = `https://api.nytimes.com/svc/topstories/v2/${query}.json?api-key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

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

  console.log(data.results);

  return (
    <>
      <div>
        <div onClick={() => setQuery("science")}>Science</div>
        <div onClick={() => setQuery("technology")}>Technology</div>
        <div>Health</div>
        <div>Politics</div>
        <div>World</div>
      </div>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.results.map(item => (
            <li>
              <a href="">{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
