import { useEffect, useState } from "react";
import useDebounce from "./utils/useDebounce";
import useFetch from "./utils/useFetch";
import useLocalstorage from "./utils/useLocalStorage";

import Results from "./components/Results";
import Saved from "./components/Saved";
import Search from "./components/Search";

function App() {
  const [data, setData] = useLocalstorage("data", {
    nominated: {},
    count: 0,
    full: false,
    query: "",
  });
  const [results, setResults] = useState([]);

  // Debounce the search term so we're not constantly calling
  const debouncedQuery = useDebounce(data.query, 500);

  // Run through our Fetch hook to get results & deconstruct return vals
  const { status, movies } = useFetch(debouncedQuery);

  useEffect(() => {
    setResults(movies);
  }, [movies]);

  const changeHandler = (e) => {
    e.preventDefault();

    const { value } = e.target;
    setData({
      ...data,
      query: value,
    });
  };

  const nominateHandler = (e, info) => {
    e.preventDefault();
    const { Title: title, imdbID: id } = info;

    if (!data.nominated.hasOwnProperty(id) && data.count < 5) {
      setData({
        ...data,
        count: (data.count += 1),
        nominated: {
          ...data.nominated,
          [id]: title,
        },
      });
    } else if (data.count === 5) {
      setData({
        ...data,
        full: true,
      });
    }
  };

  const deleteHandler = (e) => {
    e.preventDefault();

    const { value } = e.target;
    const temp = { ...data.nominated };
    delete temp[value];
    setData({
      ...data,
      nominated: temp,
      count: (data.count -= 1),
      full: false,
    });
  };

  return (
    <div className="container text-center mx-auto px-4">
      <Search
        changeHandler={changeHandler}
        query={data.query}
        status={status}
        full={data.full}
      />

      <div className="grid grid-rows-6">
        <Saved
          nominated={data.nominated}
          deleteHandler={deleteHandler}
          count={data.count}
        />
        <Results
          movies={results}
          nominateHandler={nominateHandler}
          nominated={data.nominated}
        />
      </div>
    </div>
  );
}

export default App;
