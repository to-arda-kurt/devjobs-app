const Search = () => {
  return (
    <div className="search">
      <div className="search__filter">
        <div className="search__filter__icon"> icon</div>
        <div className="search__filter__text">
          <input
            type="text"
            placeholder="Filter by title, companies,expertise"
          />
        </div>
      </div>
      <div className="search__location">second</div>
      <div className="search__button">
        <div className="search__button__checkbox">
          <label htmlFor="fullTimeCheckbox">
            <input name="fullTimeCheckbox" type="checkbox" />
            Full Time Only
          </label>
        </div>
        <div className="button">
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
