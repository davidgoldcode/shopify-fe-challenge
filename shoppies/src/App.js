import { useEffect } from "react";
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
    searchResults: [],
  });

  return (
    <div className="container text-center mx-auto px-4">
      <Search
        changeHandler={changeHandler}
        query={data.query}
        status={status}
        full={data.full}
      />

      <div className="grid grid-rows-6">
        <Saved savedList={data.nominated} deleteHandler={deleteHandler} />
        <Results
          movies={data.searchResults}
          nominateHandler={nominateHandler}
          savedList={data.nominated}
        />
      </div>
    </div>
  );
}

export default App;
