const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="mx-auto flex flex-grow max-w-lg overflow-hidden rounded-full border-0 bg-Light-Gray dark:bg-Dark-Gray shadow-sm px-4 py-3">
      {/* Search icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="currentColor"
        className="fill-Dark-Gray mr-2"
      >
        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
      </svg>

      {/* Input field */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for products..."
        className="w-full bg-transparent text-sm text-Dark-Gray outline-none focus:border-black"
      />
    </div>
  );
};

export default SearchBar;
