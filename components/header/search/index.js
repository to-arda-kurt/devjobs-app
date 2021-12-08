const Search = () => {
  return (
    <div className="search">
      <div className="search__filter">
        <div className="search__filter__icon"> </div>
        <div className="search__filter__text">
          <input
            type="text"
            placeholder="Filter by title, companies,expertise"
          />
        </div>
      </div>
      <div className="search__location">second</div>
      <div className="search__button">
        <div className="search__button__filter"></div>
        <div className="button"></div>
      </div>
    </div>
  );
};

export default Search;
