const Search = (props) => {
  const { query, changeHandler, full, status } = props;

  return (
    <>
      <h1>Shoppies</h1>

      {/* search bar */}
      <section role="search">
        <form action="#" method="get">
          <fieldset className="shadow p-4 flex">
            <label htmlFor="search" className="flex justify-start w-full">
              <svg
                className={`animate-spin inline-flex items-center h-5 w-5 mt-3 mr-5 ${
                  query && status !== "success" ? " visible" : " invisible"
                }`}
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle cx="50" cy="50" r="48" />
              </svg>

              <input
                className="w-full rounded p-2"
                type="search"
                id="search"
                value={query}
                placeholder="Try 'Avengers'"
                onChange={changeHandler}
                maxLength="200"
              />
            </label>
          </fieldset>
        </form>
      </section>

      <div
        className={`block text-sm text-red-600 bg-red-300 h-12 flex items-center p-4 rounded-md shadow-float inline-block ${
          !full && "invisible"
        }`}
        role="alert"
      >
        <span>
          <strong className="mr-1">You've reached 5 nominations!</strong> Please
          remove a movie if you'd like to add a different one
        </span>
      </div>
    </>
  );
};

export default Search;
