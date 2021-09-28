const Search = () => {
  return (
    <div>
      <div className="leading-6">
        <label className="p-1.5 text-white bg-red-400 rounded-l-md">
          search
        </label>
        <input
          type="search"
          placeholder="search ..."
          className="w-3/4 p-1 border-2 rounded-r-md"
        />
      </div>
      <div>
        <label className="block">
          <span className="text-gray-700">Select</span>
          <select className="block w-full mt-1 form-select">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Search;
