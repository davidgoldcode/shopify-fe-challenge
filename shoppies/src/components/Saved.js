const Saved = (props) => {
  const { count, nominated, deleteHandler } = props;

  return (
    <>
      <section className="text-center flex flex-col p-5 row-span-1">
        <h1>Nomination List</h1>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div className="text-right">
              <span className="text-s font-semibold inline-block text-yellow-600">
                {(count || 0) + "/5"}
              </span>
            </div>
          </div>
          <div>
            <div
              className={`absolute z-10 transition-background-color duration-500 ease-in ease-out overflow-hidden h-2 text-xs flex rounded bg-${
                count === 5 ? "green" : "yellow"
              }-200 ${count < 5 ? `w-${count}/5` : "w-full"}`}
            ></div>
            <div className="absolute overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200 w-full"></div>
          </div>
        </div>
        <ul className="flex">
          {Object.entries(nominated).map((movie) => (
            <li
              key={movie[0]}
              className="flex flex-col items-center justify-between rounded-t-lg shadow-lg rounded-lg text-sm w-1/5	m-4"
            >
              <h3>{movie[1]}</h3>
              <button onClick={(e) => deleteHandler(e)} value={movie[0]}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Saved;
