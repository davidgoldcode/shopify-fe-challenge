import { useEffect, useState } from "react";

const Results = (props) => {
  const { movies, nominateHandler, nominated } = props;

  return (
    <>
      <section className="text-center mt-5 row-span-5">
        <h1>Results</h1>
        <ul className="flex flex-wrap justify-start">
          {movies.map((info) => (
            <li
              key={info.imdbID}
              className="flex flex-col items-center justify-between rounded-t-lg shadow-lg rounded-lg text-sm w-1/5	m-4"
            >
              <h3 className="m-4">{info.Title}</h3>
              <h6>Released in {info.Year}</h6>
              <p>
                <a rel="external" href={info.imdbID} className="underline">
                  IMDB
                </a>
              </p>
              <button
                className="px-4 py-2 m-4"
                disabled={!!nominated[info.imdbID]}
                onClick={(e) => nominateHandler(e, info)}
              >
                Nominate
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Results;
